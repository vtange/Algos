//________________________________________________________________________________________________
//reset str to lower case, split to array by word (use spaces)
//for each word in arrayed str, make a word in newArr where FirstLetter is uppercase of charat0 of str.arr. When finished, convert newArr to a string with a space between each word.


function titleCase(str) {

  var strArr = str.toLowerCase().split(" ");
  var newArr = [];

  for(var i = 0 ; i < strArr.length ; i++ ){

    var FirstLetter = strArr[i].charAt(0).toUpperCase();
    var restOfWord = strArr[i].slice(1);

    newArr[i] = FirstLetter + restOfWord;

  }

  return newArr.join(' ');


}

titleCase("I'm a little tea pot");