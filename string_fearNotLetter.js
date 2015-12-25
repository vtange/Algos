//________________________________________________________________________________________________
//%%%%%%%%%%%%%%%%%% TO FIX %% -> what if "abcz"
//%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%




function fearNotLetter(str) {
  //make an alphabet variable
  //run through alphabet to check for missing letters. break if i pasts str.length
  //

  var alphabet = "abcdefghijklmnopqrstuvxyz";
  var missed = [];

//  for (var j = 0; j < str.length; j++) {  doesn't work
        for (var i = 0; i < alphabet.length; i++) {
             if ( str.indexOf(alphabet[i+alphabet.indexOf(str[0])]) === -1) {
                  missed.push(alphabet[i+alphabet.indexOf(str[0])]);
             }
             if ( i == str.length -1 ) {
                  break;
             }
        }
//  }
  missed = missed.join("");
  if (missed === "") {
      missed = undefined;
  }
  return missed;
}

fearNotLetter('y');