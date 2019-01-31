//find common subsequence string
//https://www.youtube.com/watch?v=10WnvBk9sZc

//oftimes you have recursion and have to cache past results

var fcache = Object.create(null);
function fibonacci(n){
    if(n === undefined) return null;
    if(!fcache[n])
    {
        if(n<2)
        {
            fcache[n] = n;
        }
        else
        {
            fcache[n] = fibonacci(n-1) + fibonacci(n-2);
        }
    }
    return fcache[n];
}


function decode(string, tableCodes)
{

}

//similar ^
// Returns count of possible paths to reach cell at row
// number m and column number n from the topmost leftmost
// cell (cell at 1, 1)
var pcache = Object.create(null);
function numberOfPaths(m, n)
{
    if(m === undefined || n === undefined) return null;
    var key = m+","+n;
    // If either given row number is first or given column
    // number is first
    if(!pcache[key])
    {
        if (m == 1 || n == 1)
        {
            pcache[key] = 1;
        }
        else
        {
            // If diagonal movements are allowed then the last
            // addition is required.
            pcache[key] = numberOfPaths(m-1, n) + numberOfPaths(m, n-1); // + numberOfPaths(m-1,n-1);
        }
    }
    return pcache[key];
}

function numberOfPathsMath(m, n)
{
    return factorial(m + n - 2) / (factorial(m-1) * factorial(n-1));
}

//needed for ^
var f = [];
function factorialRcrs(n) {
    if (n == 0 || n == 1)
    {
        return 1;
    }
    if(!f[n])
    {
        f[n] = factorialRcrs(n-1) * n;
    }
    return f[n];
}

function factorial(number) {
    let result = 1;

    for (let i = 2; i <= number; i += 1) {
      result *= i;
    }

    return result;
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