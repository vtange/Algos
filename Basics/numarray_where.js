//________________________________________________________________________________________________

function where(arr, num) {
  // put num inside of arr
  // sort arr
  // return index of num (if array[index] == num))

  arr.push(num);
  arr = arr.sort(function(a, b) { return a > b;});
  console.log(arr);
  for (var i = 0;i < arr.length; i++){
      if (arr[i] === num) {
          return i;
      }
  }
}

where([40, 60], 50);
