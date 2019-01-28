function PixelArray(arr2DArray){
    this.body = arr2DArray;
}

var arr = [
    [1,1,1,2,2,2],
    [1,1,1,2,3,2],
    [4,4,4,2,2,2],
    [1,4,1,2,3,2]
]

var arr2 = [
    [1,2,3,4,5,6],
    [7,8,9,10,11,12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24]
]

PixelArray.prototype.getFields = function()
{
    /*
        ASSUMES ALL COLORS (#s) have one area, so this would fail with the 1s in the above example cause it returns 8 for 1.
    */
    var seen = Object.create(null);
    var returnVal = Object.create(null);

    for(var y = 0; y < this.body.length; y++)
    {
        for(var x = 0; x < this.body[y].length; x++)
        {
            if(!seen[x+","+y])
            {
                seen[x+","+y] = true;
                returnVal[arr[y][x]] = returnVal[arr[y][x]] ? returnVal[arr[y][x]]+1 : 1;
            }
        }
    }
    return returnVal;
}


PixelArray.prototype.getNeighbors = function(x, y)
{
    var returnVal = Object.create(null);
    x = parseInt(x,10);
    y = parseInt(y,10);
    if(Array.isArray(this.body) && Array.isArray(this.body[y]))
    {
        if(this.body[y-1] != undefined && this.body[y-1][x] != undefined) returnVal[x+","+(y-1)] = this.body[y-1][x];
        if(this.body[y+1] != undefined && this.body[y+1][x] != undefined) returnVal[x+","+(y+1)] = this.body[y+1][x];
        if(this.body[y][x-1] != undefined) returnVal[(x-1)+","+y] = this.body[y][x-1];
        if(this.body[y][x+1] != undefined) returnVal[(x+1)+","+y] = this.body[y][x+1];
    }
    return returnVal;
}

//floodfill
PixelArray.prototype.getFieldsDFS = function()
{
    var seen = Object.create(null);
    var remaining = Object.create(null);
    var currentColorQueue = [];
    var returnVal = Object.create(null);
    var count = 0;

    var neighbors, current, currentColor;
    remaining["0,0"] = true;
    while(currentColorQueue.length || Object.keys(remaining).length)
    {
        //get pixel
        if(currentColorQueue.length)
        {
            current = currentColorQueue.shift().split(",");
        }
        else
        {
            if(currentColor && (!returnVal[currentColor] || count > returnVal[currentColor]))
            {
                returnVal[currentColor] = count;
            }
            count = 0;
            current = Object.keys(remaining).shift();
            delete remaining[current];
            current = current.split(",");
        }
        currentColor = this.body[current[1]][current[0]];


        //set seen to true, add to returnVal
        seen[current.toString()] = true;
        count += 1;
        console.log(currentColor, count, current.toString());

        //get neighbors
        neighbors = this.getNeighbors(current[0], current[1]);

        for(var prop in neighbors)
        {
            if(seen[prop]) continue;
            //same color
            if(neighbors[prop] == currentColor)
            {
                if(!seen[prop])
                {
                    if(remaining[prop]) delete remaining[prop];
                    currentColorQueue.push(prop);
                    seen[prop] = true;
                }
            }
            //diff color
            else if(!remaining[prop])
            {
                remaining[prop] = true;
            }
        }
    }
    //record last area
    if(currentColor && (!returnVal[currentColor] || count > returnVal[currentColor]))
    {
        returnVal[currentColor] = count;
    }

    return returnVal;
}


//floodfill (wont work w/o still using remaining table for efficient prevention of redundant neighbors)
/*
PixelArray.prototype.getFieldsDFS2 = function()
{
    var seen = Object.create(null), remaining = Object.create(null);
    var returnVal = Object.create(null);
    var queue = [];
    var count = 0;
    var current = null, currentColor = null;

    queue.push([0,0]);
    while(queue.length)
    {
        //get pixel
        current = queue.shift();
        if(currentColor)
        {

        }
        currentColor = this.body[current[1], current[0]]

        //get neighbors
        neighbors = this.getNeighbors(current[0], current[1]);

        for(var prop in neighbors)
        {
            //each pixel gets one run
            if(seen[prop]) continue;
            seen[prop] = true;

            //same color, unshift in queue (it will be prioritized during [current = queue.shift();])
            if(neighbors[prop] == currentColor)
            {
                if(!seen[prop])
                {
                    if(remaining[prop]) delete remaining[prop];
                    queue.unshift(prop);
                }
            }
            //diff color, push to queue (last to go);
            else if(!remaining[prop])
            {
                remaining[prop] = true;
            }
        }
    }
    return returnVal;
}*/

var islands1 = [
    [1,1,1,1,1,0],
    [1,1,1,0,1,0],
    [1,1,1,0,0,0],
    [1,0,0,0,0,0]
]

var islands2 = [
    [1,1,1,0,1,0],
    [1,1,1,0,1,0],
    [0,1,1,0,0,0],
    [1,0,0,0,0,0]
]
//get #times we run out of currentColorQueue
PixelArray.prototype.getNumIslands = function()
{
    /*
        ASSUMES ALL COLORS (#s) have one area, so this would fail with the 1s in the above example cause it returns 9 for 1.
    */
   var seen = Object.create(null);
   var remaining = Object.create(null);
   var currentColorQueue = [];
   /*

   */
   //var returnVal = Object.create(null);
   //var count = 0;
   var islands = 0;

   var neighbors, current, currentColor;
   remaining["0,0"] = true;
   while(currentColorQueue.length || Object.keys(remaining).length)
   {
       //get pixel
       if(currentColorQueue.length)
       {
           current = currentColorQueue.shift().split(",");
       }
       else
       {
           if(currentColor == 1)
           {
                islands += 1;
           }
           //count = 0;
           current = Object.keys(remaining).shift();
           delete remaining[current];
           current = current.split(",");
       }
       currentColor = this.body[current[1]][current[0]];

       //set seen to true, add to returnVal
       seen[current.toString()] = true;
       //count += 1;
       console.log(currentColor, islands, current.toString());

       //get neighbors
       neighbors = this.getNeighbors(current[0], current[1]);

       for(var prop in neighbors)
       {
           if(seen[prop]) continue;
           //same color
           if(neighbors[prop] == currentColor)
           {
               if(!seen[prop])
               {
                   if(remaining[prop]) delete remaining[prop];
                   currentColorQueue.push(prop);
                   seen[prop] = true;
               }
           }
           //diff color
           else if(!remaining[prop])
           {
               remaining[prop] = true;
           }
       }
   }
   //record last island
   if(currentColor == 1)
   {
        islands += 1;
   }

   return islands;
}

var islands3 = [
    [1,0,0,0,0,0],
    [1,0,1,1,1,0],
    [1,1,0,0,1,0],
    [0,1,0,0,0,0]
]

var islands4 = [
    [0,0,1,0,0,0],
    [1,0,1,0,1,0],
    [0,0,1,0,1,0],
    [1,0,0,0,0,0]
]

//get pixels whose body doesn't reach border
PixelArray.prototype.surroundedRegions = function()
{
    var thisBody = this.body;
    var noConnectionToBorder = [];
    var seen = Object.create(null);
    var neighbors, currentCoord;
    var currLand = [], currLandRemaining = [];
    var metBorder = false;
    var arrSplitCoords = [];

    //we only need the interior
    for(var y = 1; y < thisBody.length-2; y++)
    {
        for(var x = 1; x < thisBody[y].length-2; x++)
        {
            currentCoord = x+","+y;
            console.log(currentCoord);
            //found land. if !seen begin dfs
            if(!seen[currentCoord])
            {
                seen[currentCoord] = true;
                if(thisBody[y][x] == 1)
                {
                    currLandRemaining.push(currentCoord);
                    while(currLandRemaining.length)
                    {
                        currentCoord = currLandRemaining.shift().split(",");
                        console.log(currentCoord);
                        currLand.push(currentCoord);
                        neighbors = this.getNeighbors(currentCoord[0],currentCoord[1]);
                        for(var coords in neighbors)
                        {
                            if(neighbors[coords] == 1)
                            {
                                arrSplitCoords = coords.split(",");
                                if(this.isBorder(arrSplitCoords))
                                {
                                    metBorder = true;
                                }
                                if(!seen[coords])
                                {
                                    currLandRemaining.push(coords);
                                    seen[coords] = true;
                                }
                            }
                        }
                    }
                    if(!metBorder)
                    {
                        noConnectionToBorder.push(currLand);
                    }
                    metBorder = false;
                    currLand = [];
                }
            }
        }
    }
    noConnectionToBorder.forEach(function(islandCoords){
        islandCoords.forEach(function(arrCoords){
            thisBody[arrCoords[1]][arrCoords[0]] = 0;
        });
    })
    return thisBody;
}

PixelArray.prototype.isBorder = function(arrCoords)
{
    return arrCoords[0] == 0 || arrCoords[0] == this.body[0].length-1 || arrCoords[1] == 0 || arrCoords[1] == this.body.length-1;
}