function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  codeArr.forEach(function(letter){
    if(letter.search(/[\w]/g) === -1){
        decodedArr.push(letter);
    }
    else if(letter.charCodeAt(0) < 78){
        decodedArr.push(String.fromCharCode(letter.charCodeAt(0) + 13));
    }
    else{
        decodedArr.push(String.fromCharCode(letter.charCodeAt(0) - 13));
    }
  });
  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR CVMMN!");