//________________________________________________________________________________________________



function drop(arr, func) {

  var condition = arguments[1];

  arr = arr.filter(condition);

  return arr;
}



drop([1, 2, 3], function(n) {return n < 3; });
