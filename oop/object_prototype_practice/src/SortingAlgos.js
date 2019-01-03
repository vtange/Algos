function Sorter() {

}

Sorter.prototype.mergeSort = function(array)
{
    //this function breaks input array ^ into two pieces
    if(array.length < 2)
    {
        return array;
    }

    var middle = Math.floor(array.length/2);

    //return remerged(sorted) pieces broken by this function.
    return this.merge(this.mergeSort(array.slice(0, middle)), this.mergeSort(array.slice(middle)));
}

Sorter.prototype.merge = function(arr1, arr2)
{
    //this function takes two arrays and returns one array with sorted values.

    var returnVal = [];
    var left_idx = 0, right_idx = 0;

    //main sorting part
    while (left_idx < arr1.length && right_idx < arr2.length)
    {
        // change the direction of this comparison to change the direction of the sort
        if(arr1[left_idx] <= arr2[right_idx])
        {
            returnVal.push(arr1[left_idx]);
            left_idx += 1;
        }
        else
        {
            returnVal.push(arr2[right_idx]);
            right_idx += 1;
        }
    }

    //remaining pieces should be already sorted. simply concat to the return array
    if(arr1.length)
    {
        returnVal = returnVal.concat(arr1.slice(left_idx));
    }
    if(arr2.length)
    {
        returnVal = returnVal.concat(arr2.slice(right_idx));
    }
    return returnVal;
}