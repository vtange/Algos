var merge = function(array1, array2, callback){
    var array3 = [];
    
    for(var i=0; i < array1.length; i++){
        array3.push(callback(array1[i],array2[i]));
    }
return array3;
  //your code here.
};

var x = merge([1, 2, 3, 4], [5, 6, 7, 8], function(a, b){  
  return a + b;
});

console.log(x);

//x should now equal [6, 8, 10, 12].


var euclid = function(coords1, coords2){  
  //Your code here.
  //You should not use any loops and should
  //instead use your original merge function.
  var sum_xny = merge(coords1,coords2, function(a, b){  
  return b - a;
});
  //console.log(sum_xny);
  var xSqd = Math.pow(sum_xny[0],2);
  var ySqd = Math.pow(sum_xny[1],2);
  var sumSqd = xSqd + ySqd;
  return Math.sqrt(sumSqd);
};

var x = euclid([1.2, 3.67], [2.0, 4.4]);
console.log(x);
//x should now equal approximately 1.08.