function arrAddsToK(arrInts,k)
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

function getAllPossibleSets(arr)
{
    var sets = [];
    //[a,b,c]

    //use binary
    //000
    //until 111, keep adding 1 to 000 and then call fn where it translates binary to a set, push to sets.
    return sets;
}