//________________________________________________________________________________________________
//try1
function findMultiples(arr) {
    //1array for each of two numbers
    //2find common numbers between arrays, put in new array
    //3sort least to greatest, pop.

    var mult1=[];
    var mult2=[];
    var mults=[];
    var common=[];

    for (var i = 0; i <= arr[0];i++) {
        if (arr[0]%i === 0){
            mult1.push(i);
        }
    }
    for (var j = 0; j <= arr[1];j++) {
        if (arr[1]%j === 0){
            mult2.push(j);
        }
    }
    mults.push(mult1);
    mults.push(mult2);
    mults.sort(function(a,b){return a<b;});

//1 done
    console.log(mults);

  return mults;
}


findMultiples([15,30]);