function SimpleSymbols(str) { 
//if i replaced all instances of +letter+ with "" and still have letters, false, else true
  
  var regex = /\+[A-z]\+/g;
  var letters = /[A-z]/g;
  str = str.replace(regex,"");
  if(str.search(letters) ===-1){
      return true;
  }
  else{
      return false;
  }
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
