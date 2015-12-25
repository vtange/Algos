//________________________________________________________________________________________________



function diff(arr1, arr2) {
    //use index to find differences, both ways.


  var newArr = [];
  for(var i = 0; i < arr2.length; i++) {
      if ( arr1.indexOf(arr2[i]) === -1) {
          newArr.push(arr2[i]);
      }
  }
  for(var j = 0; j < arr1.length; j++) {
      if ( arr2.indexOf(arr1[j]) === -1) {
          newArr.push(arr1[j]);
      }
}
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

