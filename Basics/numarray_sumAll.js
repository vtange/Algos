//________________________________________________________________________________________________

function sumAll(arr) {
  //sort array so that lowest is first
  //make a new array that holds all numbers between given numbers (use a loop)
  //reduce that new array while adding all the numbers.

 var range = [];

 arr = arr.sort(function(a, b) { return a > b;});

  for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]);i++) {

      range.push(i);

  }


var total = range.reduce(function(a, b) {
        return a + b;
});

  return total;
}

sumAll([1, 4]);

//UPDATE 12/7 no need sort 
//________________________________________________________________________________________________

function sumAll(arr) {
  //make a new array that holds all numbers between given numbers (use a loop)
  //reduce that new array while adding all the numbers.

 var range = [];

  for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]);i++) {

      range.push(i);

  }


var total = range.reduce(function(a, b) {
        return a + b;
});

  return total;
}

sumAll([1, 4]);