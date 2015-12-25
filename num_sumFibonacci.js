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
