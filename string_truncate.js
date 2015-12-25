
//________________________________________________________________________________________________
//trim to num# of letters
//re-trim if in the middle of a word by substringing from letter 0 to the first space encountered via counting from the back(firsttrim.length)


function truncate(str, num) {

//trim to num# of letters
  if (str.length > num) {

  var firsttrim = str.substring(0,num);

//re-trim if in the middle of a word by substringing from letter 0 to the first space encountered via counting from the back(firsttrim.length)
    firsttrim = firsttrim.substring(0, Math.min(firsttrim.length, firsttrim.lastIndexOf(" ")));

    return firsttrim+"...";

  }
  // if str.length is less than or equal to num, just return the string.
  else {
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);

