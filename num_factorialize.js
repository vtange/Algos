

function factorialize(num) {
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num === 0) {
        return 1;
    }
	// set numfactorial as num, start decreasing num, multiplying with numfactorial as you go, until num
    var numfactorial = num;
    while (num-- > 2) {
        numfactorial *= num;
    }
    return numfactorial;
}
factorialize(7);

//or

function FirstFactorial(num) { 

  // code goes here
  var arr = [];
  for (var i = 1; i <= num; i++){
      arr.push(i);
  }
  arr = arr.reduce(function(a,b){return a*b;});
  
  return arr;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(8);                            
