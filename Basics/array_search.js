//________________________________________________________________________________________________

function find(arr, func) {
  var num = 0;

  var isEvens = arguments[1];

  for (var i = 0; i < arr.length; i++){
      if (arr.some(isEvens)){
       return arr[i];
      }
  }
  return undefined;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });


//UPDATE 12/7
function find(arr, func) {

  for (var i = 0; i < arr.length; i++){
      if (func(arr[i])){
       return arr[i];
      }
  }
  return undefined;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
