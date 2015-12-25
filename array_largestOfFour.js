//________________________________________________________________________________________________

//LOOK HERE IF TRYING TO BREAK ARRAY WITHIN ARRAY

//sort each inside array of numbers greatest to smallest, splice out (from2nd greatest, length of array (should've used slice))
//make a new array merged that merges the [5],[27],[39],[1001] array
//%%%%%%%%%%%%%%%%%% TO FIX %% function within a loop, put it outside
//%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%


function largestOfFour(arr) {

for (var i = 0; i < arr.length; i++) {
   arr[i].sort(function(a, b) { return a <= b}).splice(1,arr[i].length)
}

var merged = [];

  merged = merged.concat.apply(merged, arr);

  return merged;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


UPDATED 7/18

function largestOfFour(arr) {

  function greater(a, b) { return a <= b}

for (var i = 0; i < arr.length; i++) {
   arr[i].sort(greater).splice(1,arr[i].length)
}

var merged = [];

  merged = merged.concat.apply(merged, arr);

  return merged;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

UPDATED 12/7

function largestOfFour(arr) {

  var greater = function(a, b) { return a <= b;};

    for (var i = 0; i < arr.length; i++) {
       arr[i] = arr[i].sort(greater).shift();
    }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


