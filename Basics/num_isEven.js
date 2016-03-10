//no modulus

var isEven = function(num){
    while (num > 1){
        num -= 2;
    }
    while (num < 0){
        num += 2;
    }
    console.log(num);
    if(num === 0){
        return true;
    }
    else if(num === 1){
        return false;
    }
};
console.log(isEven(-1887));
// → true
