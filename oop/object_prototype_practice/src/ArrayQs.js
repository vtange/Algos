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