function PixelArray(arr2DArray){
    this.body = arr2DArray;
}

var arr = [
    [1,1,1,2,2,2],
    [1,1,1,2,3,2],
    [4,4,4,2,2,2],
    [1,1,1,2,2,2]
]

PixelArray.prototype.getFields = function()
{
    /*
        ASSUMES ALL COLORS (#s) have one area, so this would fail with the 1s in the above example cause it returns 9 for 1.
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
        if(this.body[y-1] && this.body[y-1][x]) returnVal[x+","+(y-1)] = this.body[y-1][x];
        if(this.body[y+1] && this.body[y+1][x]) returnVal[x+","+(y+1)] = this.body[y+1][x];
        if(this.body[y][x-1]) returnVal[(x-1)+","+y] = this.body[y][x-1];
        if(this.body[y][x+1]) returnVal[(x+1)+","+y] = this.body[y][x+1];
    }
    return returnVal;
}

//floodfill
PixelArray.prototype.getFieldsDFS = function()
{
    /*
        ASSUMES ALL COLORS (#s) have one area, so this would fail with the 1s in the above example cause it returns 9 for 1.
    */
    var seen = Object.create(null);
    var remaining = Object.create(null);
    var currentColorQueue = [];
    /*

    */
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
            //if same color put coord in currentColorQueue
            if(neighbors[prop] == currentColor && !seen[prop])
            {
                currentColorQueue.push(prop);
                seen[prop] = true;
            }
            else if(!remaining[prop])
            {
                //else put in remaining
                remaining[prop] = true;
            }
        }
    }

    return returnVal;
}

//get pixels whose body doesn't reach border
//{3: [1, 4]}
PixelArray.prototype.getIslands = function()
{

}
