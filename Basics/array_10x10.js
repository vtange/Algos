function array10(){
  var arr = [];
  function checkArr(arr){
      if(arr.indexOf("A")===-1){
          arr[Math.floor(Math.random()*9)] = "A";
      }
      else if(arr.indexOf("B")===-1){
          arr[Math.floor(Math.random()*9)] = "B";
      }
      else if(arr.indexOf("C")===-1){
          arr[Math.floor(Math.random()*9)] = "C";
      }
      else if(arr.indexOf("D")===-1){
          arr[Math.floor(Math.random()*9)] = "D";
      }
      return arr;
  }
  for(var i=0;i<10;i++){
    var newarr = [];
    for(var j=0;j<10;j++){
      newarr.push(String.fromCharCode(Math.floor(Math.random()*(69-65)+65)));
    }
    arr.push(checkArr(newarr));
  }
  return arr;
}