function shortenNumber(suffixes, base) {
  return function(str){
    if(str.length===0){
      return "";
    }
    else if(str.constructor !== String){
      return str.toString();
    }
    else if(str.search(/\D/g) !== -1){
      return str;
    }
    else{
      var num = parseInt(str,10);
      var steps = 0;
      while(num/base>1&&steps<suffixes.length-1){
        steps += 1;
        num = num/base;
      }
      num = parseInt(num,10);
      return num+suffixes[steps];
    }
  }
}