
//________________________________________________________________________________________________
//take in a string, convert it into an array, reverse it and join it back to a string.


function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("str");





//________________________________________________________________________________________________
//this one was copied off github



function factorialize(num) {
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num === 0) {
        return 1;
    }
	// set numfactorial as num, start decreasing num, multiplying with numfactorial as you go, until num
    var numfactorial = num;
    while (num-- > 2) {
        numfactorial *= num;
    }
    return numfactorial;
}
factorialize(7);




//________________________________________________________________________________________________
//return true if letters are reversable
//remove spaces and lower case == remove spaces and lower case + reverse as an array and joined back (could use reverse string)




function palindrome(str) {

  return str.replace(/[ ,.]/g,"").toLowerCase() === str.replace(/[ ,.]/g,"").toLowerCase().split("").reverse().join("");
}
 palindrome("googoog");




//________________________________________________________________________________________________
//split the sentence into an array by word (use spaces), sort from lowest to greatest (greatest last), pop and length it.



 function findLongestWord(str) {
  return str.split(" ").sort(function(a, b) { return a.length > b.length;}).pop().length;
}
findLongestWord("mary had a little lamb");



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

//________________________________________________________________________________________________

//LOOK HERE IF TRYING TO BREAK ARRAY WITHIN ARRAY

//sort each inside array of numbers greatest to smallest, splice out (from2nd greatest, length of array (should've used slice))
//make a new array merged that merges the [5],[27],[39],[1001] array
//%%%%%%%%%%%%%%%%%% TO FIX %% function within a loop, put it outside
//%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%


function largestOfFour(arr) {

for (var i = 0; i < arr.length; i++) {
   arr[i].sort(function(a, b) { return a <= b}).splice(1,arr[i].length)
}

var merged = [];

  merged = merged.concat.apply(merged, arr);

  return merged;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


UPDATED 7/18

function largestOfFour(arr) {

  function greater(a, b) { return a <= b}

for (var i = 0; i < arr.length; i++) {
   arr[i].sort(greater).splice(1,arr[i].length)
}

var merged = [];

  merged = merged.concat.apply(merged, arr);

  return merged;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



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


//________________________________________________________________________________________________
//make a new array by pushing size# of stuff starting from i, which goes in "size" intervals

function chunk(arr, size) {

  var newarr = []

  for (var i = 0; i < arr.length; i+=size )

    newarr.push(arr.slice(i,i+size));

  return newarr;
}

chunk(['a', 'b', 'c', 'd'], 2);


//________________________________________________________________________________________________
//start at the end and repeating from the start, splice off "howMany" numbers.

function slasher(arr, howMany) {
  // it doesn't always pay to be first

  return arr.splice(howMany,arr.length-howMany);
}

slasher([1, 2, 3], 2);

//________________________________________________________________________________________________
//copied from GitHub
//make all words lower case, since not case sensitive
//use the strings like arrays. use indexOf to count letters.
//word1.indexOf(loop every letter of word2), indexOf will break and return false on the first letter it can't find(because it's an earlier return). if it goes all the way to the end and true, the function holds true.


function mutation(arr) {

  var firstElement = arr[0].toLowerCase();
  var secondElement = arr[1].toLowerCase();
  for(var i = 0; i < arr[1].length; i++) {
    if ( firstElement.indexOf(secondElement[i]) === -1) { return false; }
  }
  return true;
}

mutation(['hello', 'hey']);


//________________________________________________________________________________________________
//use AND logic to check if input isn't any of the falsey values.
//filter can be used when you can write down what to filter out.


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function nofalsey(input){

    return input != false && input != 0 && input != "" && input != NaN && input != undefined;
  }
  return arr.filter(nofalsey);
}


bouncer([7, 'ate', '', false, 9]);


//________________________________________________________________________________________________
//for every object, if the object has a property that "source" has, mark it as "obj".
//if "obj"[that property it had in common] == the source's property value, push that object to the new array "arr"

function where(collection, source) {
  var arr = [];
  // What's in a name?
  for (var i = 0; i < collection.length; i++) {
      if (collection[i].hasOwnProperty(Object.keys(source))) {
              var obj = collection[i];
              if(obj[Object.keys(source)] == source[Object.keys(source)]) {
              arr.push(obj);
              }
        }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null },
{ first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });



//________________________________________________________________________________________________
//for searching multiple, possibly missing properties


function where(collection, source) {
  var arr = [];

  for (var i = 0; i < collection.length; i++) {
      var obj = collection[i];
      if ((obj.first == source.first || source.first == null) && (obj.middle == source.middle || source.middle == null) && (obj.last == source.last || source.last == null)) {
              arr.push(obj);
      }
  }
  return arr;
}

where([{ 'first': 'Romeo', 'middle': 'Honda', 'last': 'Montague' }, { 'first': 'Mercutio', 'middle': 'Honda', 'last': null },
{ 'first': 'Tybalt', 'middle': 'Honda', 'last': 'Capulet' }], { 'middle': 'Honda', 'last': 'Capulet' });


//________________________________________________________________________________________________
//basic name search


function where(collection, source) {
  var arr = [];

  for (var i = 0; i < collection.length; i++) {
      var obj = collection[i];
      if ((obj.name.toLowerCase().search(source.name.toLowerCase())) >= 0) {
              arr.push(obj);
      }
  }
  return arr;
}

where([{ 'first': 'Romeo', 'name': 'Hon', 'last': 'Montague' }, { 'first': 'Mercutio', 'name': 'Honda', 'last': null },
{ 'first': 'Tybalt', 'name': 'Honda', 'last': 'Capulet' }], { 'name': 'Hon', 'last': 'Capulet' });


//________________________________________________________________________________________________
//for the stuff in the arguments, first push anything not in an array into "targets" array, then push them into the first array, then remove the outer copies
//convert both the array and the "targets" array into a string, make a Regular expression out of targets.
//replace anything in array that matches the targets regular expression. convert the string back into a array.
//the array is full of numbers in string form, convert the strings back to numbers with parseInt, you must put 10 as radix (log 10).
//updated 7/17 -> RegExp must have brackets to count each character individually, I was lucky earlier with "23".

function destroyer(arr) {
  // Remove all the values
    var targets = [];

    for (var i = 0; i < arguments.length; i++){
        if (arguments[i].constructor !== Array ) {
            targets.push(arguments[i]);
            arr.push(arguments[i]);
            delete arguments[i];
        }
     }
    targets = targets.join("");
    targets = "[" + targets + "]";
    target = new RegExp(targets,"g");
    arr = arr.join("");
    arr = arr.replace(target,"");
    arr = arr.split("");
    for (var j = 0; j < arr.length; j++){
        arr[j] = parseInt(arr[j],10);
     }
  /* doesn't work since lengths change as things get cut
  console.log(arr);
  for (var j = 0; j < targets.length; j++){
      console.log("searching for: "+targets[j]);
      for (var k =0; k < arr.length; k++){
          if (arr[k] == targets[j]){
              console.log("found a "+ targets[j] + " at " + k);
              arr.splice(k,1);
          }
      }
  }
  */


  return arr;
}
destroyer([1, 2, 3, 1, 3, 2], 2, 3);

//________________________________________________________________________________________________

function where(arr, num) {
  // put num inside of arr
  // sort arr
  // return index of num (if array[index] == num))

  arr.push(num);
  arr = arr.sort(function(a, b) { return a > b;});
  console.log(arr);
  for (var i = 0;i < arr.length; i++){
      if (arr[i] === num) {
          return i;
      }
  }
}

where([40, 60], 50);

//________________________________________________________________________________________________

function sumAll(arr) {
  //sort array so that lowest is first
  //make a new array that holds all numbers between given numbers (use a loop)
  //reduce that new array while adding all the numbers.

 var range = [];

 arr = arr.sort(function(a, b) { return a > b;});

  for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]);i++) {

      range.push(i);

  }


var total = range.reduce(function(a, b) {
        return a + b;
});

  return total;
}

sumAll([1, 4]);

//________________________________________________________________________________________________



function diff(arr1, arr2) {
    //use index to find differences, both ways.


  var newArr = [];
  for(var i = 0; i < arr2.length; i++) {
      if ( arr1.indexOf(arr2[i]) === -1) {
          newArr.push(arr2[i]);
      }
  }
  for(var j = 0; j < arr1.length; j++) {
      if ( arr2.indexOf(arr1[j]) === -1) {
          newArr.push(arr1[j]);
      }
}
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//________________________________________________________________________________________________

function convert(num) {
  //start high -> if num can't be subtracted with etc, 50, 10, 5, 1 ,
  //add coresponding letter M, D, C, L, X, V, I,

  var romaNum = [];

  while (num-1000 >= 0) {

      console.log(num);
      romaNum.push("M");


      num -= 1000;
  }
  while (num-900 >= 0) {

      console.log(num);
      romaNum.push("CM");


      num -= 900;
  }
  while (num-500 >= 0) {

      console.log(num);
      romaNum.push("D");


      num -= 500;
  }
  while (num-400 >= 0) {

      console.log(num);
      romaNum.push("CD");


      num -= 400;
  }
  while (num-100 >= 0) {

      console.log(num);
      romaNum.push("C");


      num -= 100;
  }
  while (num-90 >= 0) {

      console.log(num);
      romaNum.push("XC");


      num -= 90;
  }
  while (num-50 >= 0) {

      console.log(num);
      romaNum.push("L");


      num -= 50;
  }
  while (num-40 >= 0) {

      console.log(num);
      romaNum.push("XL");


      num -= 40;
  }
  while (num-10 >= 0) {

      console.log(num);
      romaNum.push("X");


      num -= 10;
  }
  while (num-9 >= 0) {

      console.log(num);
      romaNum.push("IX");


      num -= 9;
  }
  while (num-5 >= 0) {

      console.log(num);
      romaNum.push("V");


      num -= 5;
  }
  while (num-4 >= 0) {

      console.log(num);
      romaNum.push("IV");


      num -= 4;
  }
  while (num-1 >= 0) {

      console.log(num);
      romaNum.push("I");


      num -= 1;
  }


  romaNum = romaNum.join("");


 return romaNum;
}

convert(3700);


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


//________________________________________________________________________________________________



function translate(str) {
    //if start with aeiou, return with "way" at end
    //else
    //make a copy word where every vowel is replaced with a vowel RegExp
    //use that copy to index.

  /////starts with vowels case
    if (str[0] == "a" ||str[0] == "e" ||str[0] == "i" ||str[0] == "o" ||str[0] == "u" ){
    return str + "way";
    }
  /////if haven't returned yet

    var vowels = new RegExp("[aeiou]","g");

    var vowelless = str.replace(vowels,"!");

    var restOfWord = str.substr(vowelless.indexOf("!"),str.length);
    console.log(restOfWord);

    var frontWord = vowelless.substr(0,vowelless.indexOf("!"));
    console.log(frontWord);

 return restOfWord + frontWord + "ay";
}

translate("consonant");


//used this to practice RegExp
function byevowels(str) {

    var vowels = new RegExp("[aeiou]","g");

    str = str.replace(vowels,"!");

    console.log(str);


}
byevowels("consonant");


//________________________________________________________________________________________________
function pair(str) {
    // make new array DNA
    // for every G, add GC, for every C, add CG, etc.

    //if you want to make a proper one, you first remove already completed pairs
    //out of the original string, then do the bottom. "GGCTATGC" -> "GgctaTgc"
    //use RegExp "GC", "CG", "AT", "TA" to make checkers

    var DNA = [];

    for (var i = 0; i < str.length; i++) {

        if (str[i] == "G") {
            DNA.push(["G","C"]);
        }
        if (str[i] == "C") {
            DNA.push(["C","G"]);
        }
        if (str[i] == "A") {
            DNA.push(["A","T"]);
        }
        if (str[i] == "T") {
            DNA.push(["T","A"]);
        }
    }



 return DNA;
}

pair("GGCTATGC");

//________________________________________________________________________________________________
// extra function, made this thinking i cleared it

function fearNotLetter(str) {
  //make an alphabet variable
  //return substring of alphabet variable -> (from start of str to index of
  //alphabet where last letter of str is found)

  var alphabet = "abcdefghijklmnopqrstuvxyz";

//  return alphabet.substr(0,5);
//console.log(str.split("").reverse().join("")[0]);
//returns last letter of str^
//console.log(1+alphabet.indexOf(str.split("").reverse().join("")[0]));
//returns where that letter sits in the alphabet, offset by one for index.
  return alphabet.substr(str.indexOf(str[0]),1+alphabet.indexOf(str.split("").reverse().join("")[0]));


}

fearNotLetter('abce');



//________________________________________________________________________________________________
//%%%%%%%%%%%%%%%%%% TO FIX %% -> what if "abcz"
//%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%




function fearNotLetter(str) {
  //make an alphabet variable
  //run through alphabet to check for missing letters. break if i pasts str.length
  //

  var alphabet = "abcdefghijklmnopqrstuvxyz";
  var missed = [];

//  for (var j = 0; j < str.length; j++) {  doesn't work
        for (var i = 0; i < alphabet.length; i++) {
             if ( str.indexOf(alphabet[i+alphabet.indexOf(str[0])]) === -1) {
                  missed.push(alphabet[i+alphabet.indexOf(str[0])]);
             }
             if ( i == str.length -1 ) {
                  break;
             }
        }
//  }
  missed = missed.join("");
  if (missed === "") {
      missed = undefined;
  }
  return missed;
}

fearNotLetter('y');


//________________________________________________________________________________________________


function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.

  return bool === true || bool === false;
}

boo(null);

//________________________________________________________________________________________________

function unite(arr1, arr2, arr3) {

  var united = [];

  for (var i = 0; i < arguments.length; i++){
      console.log("searching in... " + arguments[i]);
    for (var j = 0; j < arguments[i].length; j++){
        var within = arguments[i];
      if (united.indexOf(within[j]) === -1){
        console.log("pushed "+ within[j]);
        united.push(within[j]);
     }
    }
  }


  return united;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);

//________________________________________________________________________________________________



function convert(str) {

  var andsign = new RegExp("[&]","g");
  var gtrthan = new RegExp("[>]","g");
  var lssthan = new RegExp("[<]","g");
  var dblquot = new RegExp('["]',"g");
  var apostrp = new RegExp("[']","g");

  str = str.replace(andsign, "&amp;");
  str = str.replace(gtrthan, "&gt;");
  str = str.replace(lssthan, "&lt;");
  str = str.replace(dblquot, "&quot;");
  str = str.replace(apostrp, "&apos;");

  return str;
}

convert('Dolce & Gabbana');


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


//________________________________________________________________________________________________

function sumFibs(num) {
  //for loop fibonacci
  //push odds to fibodd
  //reduce fibodd -> sum


  var fibodd = [1];

  for(i=0,j=1; j < num; i=j,j=x ){

        x=i+j;

        if(x > num) {
            break;
        }
        if(x%2 !== 0) {
            fibodd.push(x);
        }
  }
  console.log(fibodd);
  return fibodd.reduce(function(a, b){return a+b;});
}

sumFibs(75025);

//________________________________________________________________________________________________

function sumPrimes(num) {
  var primes = [];
  var sieve = [];
    for (var i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (var j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }

  return primes.reduce(function(a, b){return a+b;});
}

sumPrimes(10);

//________________________________________________________________________________________________
//try1
function findMultiples(arr) {
    //1array for each of two numbers
    //2find common numbers between arrays, put in new array
    //3sort least to greatest, pop.

    var mult1=[];
    var mult2=[];
    var mults=[];
    var common=[];

    for (var i = 0; i <= arr[0];i++) {
        if (arr[0]%i === 0){
            mult1.push(i);
        }
    }
    for (var j = 0; j <= arr[1];j++) {
        if (arr[1]%j === 0){
            mult2.push(j);
        }
    }
    mults.push(mult1);
    mults.push(mult2);
    mults.sort(function(a,b){return a<b;});

//1 done
    console.log(mults);

  return mults;
}


findMultiples([15,30]);


//________________________________________________________________________________________________
//try2

function ranger(arr) {
//make an array covering range of numbers. reduce it-
//-while multiplying them all, then start dividing starting from 1.
var range = [];

    for (var i = arr[0]; i <= arr[1]; i++){
        range.push(i);
    }
	//for multiplying them all
    //var lcm = range.reduce(function(a, b){return a*b;});

    return range;
}

ranger([1,5]);

//________________________________________________________________________________________________


function smallestCommons(arr) {
//make an array covering range of numbers. divide them until no !pair of two!
//in the whole range can be anymore.
//multiply the remaining range

arr = arr.sort(function(a, b){return a>b;});
var range = [];
var divi = [];
var primes = [2,2,3,5];
primes = primes.sort(function(a, b){return a<b;});

//make range
    for (var i = arr[0]; i <= arr[1]; i++){
        range.push(i);
    }

//cycle through each prime
for (var j = 0; j < primes.length; j++) {

    for (var k = 0; k < range.length; k++) {
        if (range[k]%primes[j] === 0){
             console.log(range[k] +"/"+  primes[j] + "...OK" );
             range[k] /= primes[j];
        }
    }
//push number in prime and log the state of range
divi.push(primes[j]);
console.log(range);
}

console.log(divi);

var lcm = range.reduce(function(a, b){return a*b;}) * divi.reduce(function(a, b){return a*b;});

return lcm;
}


smallestCommons([1,13]);

//________________________________________________________________________________________________

function find(arr, func) {
  var num = 0;

  var isEvens = arguments[1];

  for (var i = 0; i < arr.length; i++){
      if (arr.some(isEvens)&&arr[i]%2===0){
       return arr[i];
      }
  }
  return undefined;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });


//________________________________________________________________________________________________



function drop(arr, func) {

  var condition = arguments[1];

  arr = arr.filter(condition);

  return arr;
}



drop([1, 2, 3], function(n) {return n < 3; });

//________________________________________________________________________________________________


function steamroller(arr) {
  //make a new array merged that concats and applies arr

  var merged = [];

  merged = merged.concat.apply(merged, arr);

  merged = merged.join(" ");

  merged = merged.split(" ");

for (var j = 0; j < merged.length; j++){
    // if there are numbers inside
    if (merged[j].match(/^[0-9]+$/) !== null) {
        merged[j] = parseInt(merged[j],10);
    }
}

  return merged;
}

steamroller(["a", ["b"], ["c", [["d"]]]]);

steamroller([1, [2], [3, [[[[[[[[[[[[[[[4]]]]]]]]]]]]]]]]]);
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

//________________________________________________________________________________________________

function every(collection, pre) {
    //start assuming things are nice and sunny, if something is wrong with collection, switch to false and return
    var tf = true;

  if (arguments[1].constructor === Object){
    for (var j = 0; j < collection.length; j++) {
      if (collection[j].hasOwnProperty(Object.keys(pre))) {

         // use obj so the next line is possible
              var obj = collection[j];

              // if keys are not the same, change tf to false and return it
              if(obj[Object.keys(pre)] !== pre[Object.keys(pre)]) {
                tf = false;
                return tf;
              }
        }
  }
  }
  else {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(arguments[1])) {
            return tf;
        }
        else {
            tf = false;
            return tf;
        }
  }
}
}


every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], {'sex': 'female'});

//________________________________________________________________________________________________




function add() {
   var args = [].slice.call( arguments );

    if (args[0].constructor !== Number) {
     return undefined;
    }
    else if (args[1] === undefined){
        return function( value ) {
            if( typeof value !== 'number' || value !== value ) {
                return undefined;
            }
        return args[ 0 ] + value;
        };
    }
    else if (args[0].constructor === Number && args[1].constructor === Number ) {
        return args[0] + args[1];
    }
    else {
        return undefined;
    }
}

add(2)(3);

