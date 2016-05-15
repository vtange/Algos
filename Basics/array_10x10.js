function array10(){
  var arr = [];
  for(var i=0;i<10;i++){
    var newarr = ["A","B","C","D"];
    for(var j=4;j<10;j++){
      newarr.splice(Math.floor(Math.random()*9),0,String.fromCharCode(Math.floor(Math.random()*(69-65)+65)));
    }
    arr.push(newarr);
  }
  return arr;
}