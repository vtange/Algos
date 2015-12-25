//________________________________________________________________________________________________



function replace(str, before, after) {
    //split string into array
    //if before is capitalized, capitalize after (can't do it without splitting after into an array)
    //if word in stringarray == before, replace with after.

  str = str.split(" ");

  if (before[0] == before[0].toUpperCase()) {
        after = after.split("");
        after[0] = after[0].toUpperCase();
        after = after.join("");
  }

  console.log(after);

  for (var i = 0; i < str.length; i++){
      if (str[i] == before){
        str[i] = after;
      }
  }
  str = str.join(" ");

 return str;
}

replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");