//________________________________________________________________________________________________

function sumFibs(num) {
  //for loop fibonacci
  //push odds to fibodd
  //reduce fibodd -> sum


  var fibodd = [1];

  for(i=0,j=1; j < num; i=j,j=x ){

        x=i+j;

        if(x > num) {
            break;
        }
        if(x%2 !== 0) {
            fibodd.push(x);
        }
  }
  console.log(fibodd);
  return fibodd.reduce(function(a, b){return a+b;});
}

sumFibs(75025);

//________________________________________________________________________________________________

function getFib(n) {
	if(n===0)
		return 0;
	if(n===1)
		return 1;
	else{
		return getFib(n-1)+getFib(n-2);
	}
}

//________________________________________________________________________________________________

function getFibCached(n) {
    var cache = [];
    function getFib(n){
        if(!cache[n])
        {
            if(n<2)
            {
                cache[n] = n;
            }
            else
            {
                cache[n] = getFib(n-1) + getFib(n-2);
            }
        }
        return cache[n];
    }
    return getFib(n);
}