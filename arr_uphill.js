var isMonotone = function(arr){
  if(arr.length < 2){
    return true;
  }
  function altCheck(height1,height2){
    return height2 >= height1;
  }
  for(var i=0;i<arr.length-1;i++){    // faster than forEach or reduce because it terminates once a false situation is reached
      if(altCheck(arr[i],arr[i+1])===false){
          return false;
      }
  }
  return true;
};
isMonotone([1,4,2,3]);

//competitor

var isMonotone = function(arr){
  return arr.every(function(x, idx) {
    return idx === 0 ? true : arr[idx] >= arr[idx-1];
  });
}