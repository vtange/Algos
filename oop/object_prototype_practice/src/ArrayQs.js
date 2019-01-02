function arrAdd2K(arrInts,k)
{
    var table = {};
    var missing;
    //return bool true if a pair that adds to k can be found
    if(arrInts.length < 2)
    {
        return false;
    }
    for (var i=0;i<arrInts.length;i++)
    {
        missing = k-arrInts[i];
        if(table.hasOwnProperty(arrInts[i]))
        {
            return true;
        }
        else if(!table[missing])
        {
            table[missing] = arrInts[i];//value doesnt matter
        }
    }
    return false;
}

function arrMapProduct(arrInts)
{
    var arr = [];
    var tot = 1;

    for(var i=0;i<arrInts.length;i++)
    {
        tot *= arrInts[i];
    }
    for(var i=0;i<arrInts.length;i++)
    {
        arr.push(tot/arrInts[i]);
    }

    return arr;
}

function arrMapProductNoDivide(arrInts)
{
    var arr = [];
    var tab = {};
    var tot = 1;

    for(var i=0;i<arrInts.length;i++)
    {
        tab[i] = tot;
        tot *= arrInts[i];
    }

    tot = 1;

    for(var i=arrInts.length-1;i>=0;i--)
    {
        tab[i] *= tot;
        tot *= arrInts[i];
    }

    for(var i in tab)
    {
        arr.push(tab[i]);
    }

    return arr;
}

function arrFirstMissingPosInt(arrInts)
{
    var newArr = new Array(arrInts.length);

    //loop arrInt, sort
    for(var i = 0; i < arrInts.length; i++)
    {
        //only possible answers are 1 thru arrInts.Length
        if(arrInts[i] > 0 && arrInts[i] <= arrInts.length)
        {
            newArr[arrInts[i]-1] = arrInts[i];
        }
    }

    for(var j = 0; j < newArr.length; j++)
    {
        if(!newArr[j])
        {
            return j+1;
        }
    }

    return 1;
}


function arrFirstMissingPosIntUsingSet(arrInts)
{
    var set = {};
    var returnVal = 1;

    //loop arrInt, put each unique number into set
    for(var i = 0; i < arrInts.length; i++)
    {
        if(!set[arrInts[i]])
        {
            set[arrInts[i]] = true;
        }
    }
    while(set[returnVal]) //while you can find the next pos integer in seen list
    {
        returnVal++
    }
    return returnVal;
}

function largestNonAdjacentSum(arrInts)
{
    //[5,1,2,5,1]
    var max_excluding_last = Math.max(0, arrInts[0]) || 0; //5
    var max_including_last = Math.max(max_excluding_last, arrInts[1]) || 0; //5 vs 1 -> 5
    var prev_max_including_last;

    for (var i=2;i<arrInts.length;i++)
    {
        prev_max_including_last = max_including_last; //5 //7 (5+2) //10

        max_including_last = Math.max(max_including_last, max_excluding_last + arrInts[i]); //5 vs 5+2 -> 7 // 7 vs 5 + 5 -> 10 // 10 vs 7 + 1 -> 10
        max_excluding_last = prev_max_including_last; //5 //7 //10
    }

    return Math.max(max_including_last, max_excluding_last)
}

function max_overlapping(arrIntervals)
{
    var starts = arrIntervals.map(function(a){return a[0];}).sort(function(a,b){return a - b;});
    var ends = arrIntervals.map(function(a){return a[1];}).sort(function(a,b){return a - b;});

    var classrooms = 0;
    var startIdx = 0;
    var endIdx = 0;
    nextEnd = ends[endIdx];
    nextStart = starts[startIdx];
    while(nextStart != undefined)
    {
        if(nextStart < nextEnd)
        {
            //if a class started before another finishes, add a room
            classrooms++;

            //check next class next
            startIdx++;
            nextStart = starts[startIdx];
        }
        else
        {
            //a class ended, free a room
            classrooms--;

            //check next class that ends
            endIdx++;
            nextEnd = ends[endIdx];
        }
    }
    return classrooms;
}

var a = Array.apply(null, Array(Math.floor(Math.random()*50)+100)).map(String.prototype.valueOf,"_");

function getRandFromArrayUnknownLength(arr)
{
    var i = 0, returnVal = 0;
    while(arr[i])
    {
        if(Math.random() <= 1/(i+1))
        {
            returnVal = i;
        }
        i++;
    }
    return returnVal;
}

//multiple randoms (used in civ4 resource randomizer)
function getRand(arr, num)
{
    var i = 0, returnVal = [];
    while(arr[i])
    {
        if(Math.random() <= num/(i+1))
        {
            returnVal.push(i);
            if(returnVal.length > num) returnVal.splice(Math.floor(Math.random()*num),1);
        }
        i++;
    }
    return returnVal;
}