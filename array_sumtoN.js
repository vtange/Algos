function isSumPossible(a, n) {
    for(var i=0;i<a.length;i++){
        //for each number ^
        if(a[i]<n){
        //don't bother summing numbers greater than n
            for (var j=0;j<a.length;j++){
             //scan through array once more, skipping itself
                if(j===i){
                }
                else{
                    //if num in array + second num in array equals to n, return 1;
                    if(a[i]+a[j]===n){
                        return 1;
                    }
                }
            }
        }
    }
    return 0;
}


//for 3 num sums e.g. 1+4+5 =10
function isSumPossibleZ(a, n, z) {
    function lessThanN(input){
        return input<n;
    }
    a = a.filter(lessThanN);
    if(a.length<z){
        return 0;
    }
    else{
        for(var i=0;i<a.length;i++){
             //for each remaining number
             var middlemen = a.filter(function(input){return input!==a[i]&&a[i]+input<n;});
             //filter array again for the middleman, if you can sum them and still be less than(but NOT equal to) n
             if(middlemen.length===z-1){
                 //if a[i] and middlemen only left, sum all middlemen and a[i], if it's n, :), if not, :(
                 if(middlemen.reduce(function(tot,nex){return tot+nex;})+a[i]===n){
                     return 1;
                 }
                 else{
                     return 0;
                 }
             }
             else if(middlemen.length>z-1){
             //if there are enough middlemen to fill z
                 for(var j=0;j<middlemen.length;j++){
                     //then for each middleman, filter for the final number, must equal to n
                     var finalCandidates = middlemen.filter(function(input){return a[i]+middlemen[j]+input===n;});
                     if(finalCandidates.length>0){
                         return 1;
                     }
                 }
             }
        }
    }
}
//for z num sums e.g. 1+4+5+z+s+d+e+...
function isSumPossibleZ(a, n, z) {
    function lessThanN(input){
        return input<n;
    }
    function sumation(tot,nex){return tot+nex;};
    
    a = a.filter(lessThanN);
    if(a.length<z){
        return 0;
    }
    else{
        for(var i=0;i<a.length;i++){
             //for each remaining number
             var middlemen = a.filter(function(input){return input!==a[i]&&a[i]+input<n;});
             //filter array again for the middleman, if you can sum them and still be less than(but NOT equal to) n
            function testMiddlemen(){
                if(middlemen.length===z-1){
                     //if a[i] and middlemen only left, sum all middlemen and a[i], if it's n, :), if not, :(
                     if(middlemen.reduce(sumation)+a[i]===n){
                         return 1;
                     }
                     else{
                         return 0;
                     }
                 }
                 else if(middlemen.length>z-1){
                 //if there are more than enough middlemen to fill z, test largest middlemen and drop the largest
                     var largestMan = middlemen.sort(function(a,b){return a<b;})[0];
                     var nextLargest = middlemen.slice(1,z-1);
                     if(a[i]+largestMan + nextLargest.reduce(sumation)!==n){
                         middlemen.splice(0,1);
                         testMiddlemen();
                     }
                 }
            }
            return testMiddlemen();
        }
    }
}