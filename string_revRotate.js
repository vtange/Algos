function cubeDigits(num_str){
  let arr = num_str.split("").map(Number);
  return arr.reduce(function(tot,nxt){
    return tot + Math.pow(nxt,3);
    },0);
}
function reverse(num_str){
  return num_str.split("").reverse().join("");
}
function shiftLeft(num_str){
  return num_str.substring(1,num_str.length)+num_str.slice(0,1);
}
function revrot(str, sz) {
  if(sz===0||str.length===0||sz>str.length){
    return "";
  }
  let arr = [];
  for(let i=0;i<str.length;i+=sz){
    let num = str.slice(i,i+sz);
    //if chunk is shorter than sz, push blank
    if (num.length<sz){
      arr.push("");
    }
    //if sum of chunk's digits' cubes is even
    else if(cubeDigits(num)%2===0){
      arr.push(reverse(num));
    }
    else{
      arr.push(shiftLeft(num));
    }
  }
  return arr.join("");
}