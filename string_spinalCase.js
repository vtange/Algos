//________________________________________________________________________________________________

function spinalCase(str) {
  //return to lower case and replace all spaces and underscore with hyphen
  //if character after is capital, make a space.

  var spaces = new RegExp("[ _]", "g");
  var caps = new RegExp("[A-Z]","g");


  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.toLowerCase();
  str = str.replace(spaces,"-");
  return str;
}

spinalCase('thisIsSpinalTap');