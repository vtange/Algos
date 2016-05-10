var num2 = "9000000000";
var num =  "10000000000";
function subtract(a, b){
var negative = false;
if(parseInt(b,10)>parseInt(a,10)){
    b = [a, a = b][0];
    negative = true;
}
a = a.brkDown().split(",");
b = b.brkDown().split(",");
while(a.length !== b.length){
  if(a.length > b.length){
    b.unshift("0000000000");
  }
  else{
    a.unshift("0000000000");
  }
}
a.forEach(function(str,index){
    var diff = parseInt(str,10)-parseInt(b[index],10);
    if(diff < 0 && index !== 0){
        a[index-1] = index-1===0 ? a[index-1]-1:prependZeroes(a[index-1]-1);
        a[index] = 10000000000+parseInt(str,10)-parseInt(b[index],10);
    }
    else{
        a[index] = diff;
    }
    //if all that's left is 0, replace with ""
    if(a[index]===0&&index!==a.length-1){
        a[index] = "";
    }
    //if index-1 is not blank, need zeroes
    if(index>0){
        if(a[index-1]>0){
            a[index] = prependZeroes(a[index]);
        }
    }
    console.log(a);
});


return negative ? "-"+a.join(""):a.join("");
}

String.prototype.brkDown = function(){
    return this.replace(/\B(?=(\d{10})+(?!\d))/g, ",");
}

function prependZeroes(num){
    while(num.toString().length<10){
        num = "0"+num;
    }
    return num;
}
console.log(subtract(num,num2));