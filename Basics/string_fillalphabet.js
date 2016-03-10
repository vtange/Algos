//________________________________________________________________________________________________
// extra function, made this thinking i cleared it

function fearNotLetter(str) {
  //make an alphabet variable
  //return substring of alphabet variable -> (from start of str to index of
  //alphabet where last letter of str is found)

  var alphabet = "abcdefghijklmnopqrstuvxyz";

//  return alphabet.substr(0,5);
//console.log(str.split("").reverse().join("")[0]);
//returns last letter of str^
//console.log(1+alphabet.indexOf(str.split("").reverse().join("")[0]));
//returns where that letter sits in the alphabet, offset by one for index.
  return alphabet.substr(str.indexOf(str[0]),1+alphabet.indexOf(str.split("").reverse().join("")[0]));


}

fearNotLetter('abce');


