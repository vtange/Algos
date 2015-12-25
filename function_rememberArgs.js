var functWithMemory = function(){
    var old = [];
    return function(args){
        old.push(args);
        old = old.slice(old.length-2);
        return old[0];//return the args from last invocation
    };
};

var funct = functWithMemory();
console.log(funct("a"));
console.log(funct("b"));
console.log(funct("c"));
console.log(funct("d"));
console.log(funct("e"));
console.log(funct("f"));

/* playing with splice, doesn't work
var functWithMemory = function(){
    var old = [];
    return function(args){
        old.push(args);
        old.splice(0);
        return old;//return the args from last invocation
    };
};

var funct = functWithMemory();
console.log(funct("a"));
console.log(funct("b"));
console.log(funct("c"));
console.log(funct("d"));
console.log(funct("e"));
console.log(funct("f"));

*/