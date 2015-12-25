function forEachinArr(arr,doFunctOn){
    for(var i=0; i<arr.length;i++){
        doFunctOn(arr[i]);
    }
}

function map(arr,doFunctOn){
    newarr = [];
    forEachinArr(arr, function(each){
        newarr.push(doFunctOn(each));
    });
    return newarr;
}

function filter(arr,funct){
    newarr = [];
    forEachinArr(arr, function(each){
        if(funct(each)){
            newarr.push(each);
        }
    });
    return newarr;
}
function filter2(arr,funct){
    newarr = [];
    forEachinArr(arr, function(each){
            newarr.push(funct(each));
    });
    return newarr;
}
function every(arr,funct){
    clear = true;
    forEachinArr(arr, function(each){
            if (!funct(each)){
                clear = false;
            }
    });
    return clear;
}


var power4 = function(input){
    return Math.pow(input,4);
};


var gtr3 = function(input){
    return input>3;
};

var arr = [1,2,3,4,5,6,7];

var newarr = filter2(arr,gtr3);
console.log(newarr);

var newarr2 = arr.filter(gtr3);
console.log(newarr2);

var newarr3 = every(arr,gtr3);
console.log(newarr3);
console.log(every(newarr2,gtr3));