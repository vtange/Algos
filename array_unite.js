//________________________________________________________________________________________________

function unite(arr1, arr2, arr3) {

  var united = [];

  for (var i = 0; i < arguments.length; i++){
      console.log("searching in... " + arguments[i]);
    for (var j = 0; j < arguments[i].length; j++){
        var within = arguments[i];
      if (united.indexOf(within[j]) === -1){
        console.log("pushed "+ within[j]);
        united.push(within[j]);
     }
    }
  }


  return united;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);

UPDATE 12/7
//________________________________________________________________________________________________

function unite(arr1, arr2, arr3) {

  var united = [];

  for (var i = 0; i < arguments.length; i++){
      //each array i [1, 2, 3], [5, 2, 1, 4], [2, 1]
      console.log("searching in... " + arguments[i]);
    for (var j = 0; j < arguments[i].length; j++){
        //each number j 1, 2, 3
      if (united.indexOf(arguments[i][j]) === -1){
        console.log("pushed "+ arguments[i][j]);
        united.push(arguments[i][j]);
     }
    }
  }


  return united;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
