function LetterChanges(str) { 
  var alpha = /[A-z]/g;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++){
      if(str[i].search(alpha) !==-1){
          str = str.replace(str[i],String.fromCharCode(str[i].charCodeAt(0) + 1));
          console.log(str[i]);
      }
  }
  for (var j = 0; j < str.length; j++){
      var vowels = /[aeiou]/g;
      if(str[j].search(vowels) !== -1){
          str = str.replace(str[j],str[j].toUpperCase());
      }
  }
  
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());    