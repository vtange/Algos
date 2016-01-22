//chains chests- i mean functions

function chained(arr_of_functions) {
  return function(input){
    arr_of_functions.forEach(function(funct){
   input = funct(input);
    });
    return input;
  };
}


function timesTwo(num){
    return num * 2;
}
function timesThree(num){
    return num * 3;
}
function timesFour(num){
    return num * 4;
}
function timesFive(num){
    return num * 5;
}


chained([timesTwo,timesThree,timesFour,timesFive])(6);// => 720