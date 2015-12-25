var countBs = function(str){
    var regex = /[B]/g;
    return str.match(regex).length;
};
console.log(countBs("BBC"));


var countBs = function(str,ltr){
    var regex = new RegExp(ltr,"g");
    return str.match(regex).length;
};
console.log(countBs("BBbbbbBBBBBC", "[B]"));
