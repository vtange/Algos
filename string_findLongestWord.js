
//________________________________________________________________________________________________
//split the sentence into an array by word (use spaces), sort from lowest to greatest (greatest last), pop and length it.



 function findLongestWord(str) {
  return str.split(" ").sort(function(a, b) { return a.length > b.length;}).pop().length;
}
findLongestWord("mary had a little lamb");

//UPDATE 12/7 coderbyte for numbers and other junk

function LongestWord(sen) { 
    var regex = /[\w]+/g;
    var arrOmatches = sen.match(regex);
    console.log(arrOmatches);
    var longestsofar = "";
    for (var i=0;i<arrOmatches.length;i++){
        if (arrOmatches[i].length > longestsofar.length){
            longestsofar = arrOmatches[i];
        }
    }
  // code goes here  
  return longestsofar; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());    