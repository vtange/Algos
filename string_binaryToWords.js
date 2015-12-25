//________________________________________________________________________________________________

function binaryAgent(str) {
//convert to array
  str = str.split(" ");

  for (var i = 0; i<str.length;i++){
       //convert to normal numbers
      str[i] = parseInt( str[i], 2 );

      //convert to letters
      str[i] = String.fromCharCode(str[i]);
  }

  //remove quotes from front and back
  //str = str.replace(/['"]+/g, '');

  str = str.join("");

  return str;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
