function reverseLetters(input){
    var colorRange = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var colorRangeRev = colorRange.slice().reverse();
return input.split("").map(function(letter){
    return colorRangeRev[colorRange.indexOf(letter.toUpperCase())];
  });
}


function getReversedColor(hexColor) {
		var output;
    if(hexColor.constructor!==String){
        throw "Gotta have a string.";
    }
    if(hexColor.length===0){
        return "#FFFFFF";
    }
    while (hexColor.length<6){
        hexColor = "0"+hexColor;
    }
    if(hexColor.length===6&&/[ABCDEFabcdef1234567890]{6}/g.test(hexColor)){
        output = reverseLetters(hexColor);
    }
    else{
        throw "Invalid Input.";
    }
  return "#"+output.join("");
}