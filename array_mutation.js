//________________________________________________________________________________________________
//copied from GitHub
//make all words lower case, since not case sensitive
//use the strings like arrays. use indexOf to count letters.
//word1.indexOf(loop every letter of word2), indexOf will break and return false on the first letter it can't find(because it's an earlier return). if it goes all the way to the end and true, the function holds true.


function mutation(arr) {

  var firstElement = arr[0].toLowerCase();
  var secondElement = arr[1].toLowerCase();
  for(var i = 0; i < arr[1].length; i++) {
    if ( firstElement.indexOf(secondElement[i]) === -1) { return false; } //if indexOf finds even one letter that returns -1, return false
  }
  return true;
}

mutation(['hello', 'hey']);

