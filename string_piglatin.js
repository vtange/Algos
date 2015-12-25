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