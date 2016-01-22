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

//1/16/16

function titleCase(title, minorWords) {
  //always start from scratch
  title = title.toLowerCase();
  var words = title.split(" ");
  
  //No minorWords - just Capt them all
  if(!minorWords){
      return words.map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
  }
  
  //Yes minorWords - Only Capt non-minorWords
  var letters = title.split("");
  var pass = words.filter(function(word){
      return minorWords.toLowerCase().split(" ").indexOf(word)===-1;      
  });
  pass.forEach(function(item,index){
    letters[title.search(item)] = letters[title.search(item)].toUpperCase();
  });
  //always Capt beginning of line
  letters[0] = letters[0].toUpperCase();
  return letters.join("");
}
titleCase('a clash of KINGS', 'a an the of');
titleCase('THE WIND IN THE WILLOWS', 'The In');
titleCase("First a of in", "an often into");