
//Kadane's algorithm
var maximumSubArray = function(array) {
    var max_ending_here = 0;
    var max_so_far = 0;
    var startIdx = 0;
    var endIdx = 0;

    for (var i = 0; i < array.length; i++)
    {
        max_ending_here = Math.max(0, max_ending_here + array[i]);
        if(max_ending_here === 0) startIdx = i;
        else endIdx = i;
        max_so_far = Math.max(max_so_far, max_ending_here);
    }
    return {max:max_so_far, subarray: array.slice(startIdx,endIdx)};
};

maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


//Binary Tree Maximum Path Sum also here