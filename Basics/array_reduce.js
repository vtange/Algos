//first pass
var reduce = function(collection, callback){
    function chunk(arr, size) {
    var newarr = [];
    for (var i = 0; i < arr.length; i+=size )
    newarr.push(arr.slice(i,i+size));
    return newarr;
}
var parts = chunk(collection,2);

    for (var i=0;i<parts.length;i++){
        if(parts[i].length == 2){
            parts[i] = callback(parts[i][0],parts[i][1]);
        }
        else{
            parts[i] = parts[i][0];
        }
    }
    console.log(parts);
};

var arr = [1,2,3,4,5,6,7];

reduce(arr,function(a,b){return a+b;});

//second pass, only works for arithmetic

var reduce = function(collection, callback){
    while(collection.length > 1){
        for (var i=0;i<collection.length;i+=1){
            //console.log(collection[i]);
            //console.log(collection[i+1]);
            if(collection[i+1] !== undefined){
                collection[i] = callback(collection[i],collection[i+1]);
                collection.splice(i+1,1);
            }
            else{
                collection[i] = collection[i];
            }
        }
    //console.log(collection);
    }
    return collection[0];
};

var arr = [1,2,3,4,5,6,7];

reduce(arr,function(a,b){return a+b;});


//third pass modular, works for all i bet
function forEachinArr(arr,doFunctOn){
    for(var i=0; i<arr.length;i++){
        doFunctOn(arr[i]);
    }
}

var reduce = function(collection, callback){
    var total = 0;
       forEachinArr(collection,function(each){
            total = callback(total, each);
       });
    return total;
};

