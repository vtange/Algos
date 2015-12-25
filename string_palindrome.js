//________________________________________________________________________________________________
//return true if letters are reversable
//remove spaces and lower case == remove spaces and lower case + reverse as an array and joined back (could use reverse string)




function palindrome(str) {

  return str.replace(/[ ,.]/g,"").toLowerCase() === str.replace(/[ ,.]/g,"").toLowerCase().split("").reverse().join("");
}
 palindrome("googoog");