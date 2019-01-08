function longestPalindromeSubstring(string)
{
    //abbe -> bb
    //babed -> bab
    //racecar -> racecar, aceca

    /*
    O^2 time and space
    soln 1: make "stringReverse", look for common substrings, and for each common substring check if they are actually palindromes (reverse the substring and check each letter)

    O^2 time constant space, doesn't involve a longest common substring problem ^
    soln 2: loop letters in string, for each do a growing function.
        -> first check for double letters, then check if letter[i-1] and letter[i+1] are the same and grow.

    */

    if (string.length <= 1) return string;
    let start = 0, end = 0;

    //abb
    for (let i = 0; i < string.length; i++) {
      const len1 = expandAroundCenter(string, i, i);
      const len2 = expandAroundCenter(string, i, i + 1);
      const len = Math.max(len1, len2);
      if (len > end - start) {
        start = i - (len-1) / 2;
        end = i + len / 2;
      }
    }
    return string.slice(Math.ceil(start), end + 1);
};

function expandAroundCenter(string, left, right) {
    let L = left,
      R = right;
    while (L > -1 && R < string.length) {
        if (string[L] !== string[R]) break;
        L--;
        R++;
    }
    return R - L - 1;
}

function shortestSubstringWLetters(string, stringOfLetters)
{
    //acbbaca -> baca
    //create table of letters found in stringOfLetters
    //      -> "aca" = {a:2, c:1};


    //two pointers, string[0], string[1];
    //newTable {} for letters found in string
    //move pointer2, tick up letters in newTable til we find all letters in stringOfLetters's table. mark it.
    //continue moving pointer2 until we find more letters than we need. (one more "a" AND one more "c")
    //move pointer1 til we have only {a:2, c:1} again;
}

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

function decode(string, tableCodes)
{

}

//similar ^
// Returns count of possible paths to reach cell at row
// number m and column number n from the topmost leftmost
// cell (cell at 1, 1)
function numberOfPaths(m, n)
{
    // If either given row number is first or given column
    // number is first
    if (m == 1 || n == 1)
            return 1;

    // If diagonal movements are allowed then the last
    // addition is required.
    return numberOfPaths(m-1, n) + numberOfPaths(m, n-1);
        // + numberOfPaths(m-1,n-1);
}

function numberOfPathsMath(m, n)
{
    return factorial(m + n - 2) / (factorial(m-1) * factorial(n-1));
}

//needed for ^
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}


var dpArr = [
    [undefined,undefined],
    [undefined, undefined],
    [undefined, undefined],
    [undefined, undefined],
    [undefined, undefined],
    [undefined, undefined]
];

function knapsackDP(itemsNumber, capacity, weights, values) {

    var finalResult;

    //check to see if the result is already stored in the array. if it is return that instead
    if(dpArr[itemsNumber][capacity] !== undefined) {
        return dpArr[itemsNumber][capacity];
    }

    //define basecase. if capacity or number of items is zero, then final result is zero
    if(itemsNumber === 0 || capacity === 0) {
        finalResult = 0;
    } else if(weights[itemsNumber] > capacity) {
        finalResult = knapsackDP(itemsNumber - 1, capacity, weights, values);
    } else {
        var dontPutInKnapsack = knapsackDP(itemsNumber - 1, capacity, weights, values);
        var putInSack = values[itemsNumber] + knapsackDP(itemsNumber - 1, capacity - weights[itemsNumber], weights, values);
        finalResult = Math.max(dontPutInKnapsack, putInSack);
    }

    //save the result in the array
    dpArr[itemsNumber][capacity] = finalResult;

    //return the final result
    return finalResult;
}

function improvedMathPow(a, b)
{
    if (b == 0)
    {
        return 1;
    }
    else if(b % 2 == 1)
    {
        return a * improvedMathPow(a, b - 1);
    }
    else
    {
        p = improvedMathPow(a, b / 2)
        return p * p;
    }
}