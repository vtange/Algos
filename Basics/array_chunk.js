
//________________________________________________________________________________________________
//make a new array by pushing size# of stuff starting from i, which goes in "size" intervals

function chunk(arr, size) {

  var newarr = []

  for (var i = 0; i < arr.length; i+=size )

    newarr.push(arr.slice(i,i+size));

  return newarr;
}

chunk(['a', 'b', 'c', 'd'], 2);

