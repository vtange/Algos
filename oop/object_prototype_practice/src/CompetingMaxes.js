
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

//much easier to read than ^. for the same input //[5,1,2,5,1] oddMax basically wins
function largestNonAdjacentSumAlt(num) {
    var prevEvenMax = 0;
    var prevOddMax = 0;

    if(Array.isArray(num))
    {
        for (var i = 0; i < num.length; i++) {
            if (i % 2 === 0) {
                prevEvenMax = Math.max(prevEvenMax + num[i], prevOddMax);
            }
            else {
                prevOddMax = Math.max(prevOddMax + num[i], prevEvenMax);
            }
        }
    }

    return Math.max(prevEvenMax, prevOddMax);
}


//Kadane's algorithm - single subarray with largest sum
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


//Binary Tree Maximum Path Sum
/**
 * @param root: The root of binary tree.
 * @return: An integer.
 */
var max = 0;
function maxPathSum(root) {
    maxPath(root);
    return max;
}

function maxPath(root) {
    if (root == null) return 0;
    var left = maxPath(root.left);
    var right = maxPath(root.right);
    max = Math.max(max, left + right + root.value);
    max = Math.max(max, root.value);
    return Math.max(max, Math.max(left, right) + root.value);
}

var testBinaryMaxPathSumTree = new BinaryHeap();
testBinaryMaxPathSumTree.insert(1);
testBinaryMaxPathSumTree.insert(2);
testBinaryMaxPathSumTree.insert(3);