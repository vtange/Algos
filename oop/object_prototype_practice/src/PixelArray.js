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

    for(var y = 0; y < arr.length; y++)
    {
        for(var x = 0; x < arr[y].length; x++)
        {
            if(!seen[x+","+y])
            {
                seen[x+","+y] = true;
                returnVal[arr[y][x]] = returnVal[arr[y][x]] ? returnVal[arr[y][x]]+1 : 1;
            }
        }
    }
}


PixelArray.prototype.getNeighbors = function(x, y)
{
    var returnVal = [];
    if(Array.isArray(this.body) && Array.isArray(this.body[y]))
    {
        if(this.body[y-1] && this.body[y-1][x]) returnVal.push(this.body[y-1][x]);
        if(this.body[y+1] && this.body[y+1][x]) returnVal.push(this.body[y+1][x]);
        if(this.body[y][x-1]) returnVal.push(this.body[y][x-1]);
        if(this.body[y][x+1]) returnVal.push(this.body[y][x+1]);
    }
    return returnVal;
}

//floodfill
PixelArray.prototype.getFieldsDFS = function()
{
    /*
        ASSUMES ALL COLORS (#s) have one area, so this would fail with the 1s in the above example cause it returns 9 for 1.
    */
    var arr = this.body;
    var seen = Object.create(null);
    var returnVal = Object.create(null);
    var lastColor = null;

    for(var y = 0; y < arr.length; y++)
    {
        for(var x = 0; x < arr[y].length; x++)
        {
            if(!seen[x+","+y] && lastColor != arr[y][x])
            {
                //set last color, set pixel to seen
                lastColor = arr[y][x];
                seen[x+","+y] = true;
                returnVal[arr[y][x]] = 1;

                //start DFS on this pixel
                var neighbors = this.getNeighbors();
                for(var i = 0; i<neighbors.length; i++)
                {

                }
            }
        }
    }
}

//get pixels whose body doesn't reach border
//{3: [1, 4]}
PixelArray.prototype.getIslands = function()
{

}
