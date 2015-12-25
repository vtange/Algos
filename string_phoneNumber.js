function telephoneCheck(str) {
  // Good luck!
  
 var regex = /1?[\s-]?\(?\d{3}?\)?[\d- ]+/g;  
 var symbols = /[() -]/g;
 var curve1 = /\)/g;
 var curve2 = /\(/g;
//if less than 10 chars, obviously not a phone #
    if (str.replace(symbols,"").length < 10){
        return false;
    }//if has more than 10 chars, the first char must be a 1
    else if (str.replace(symbols,"").length > 10 && str.replace(symbols,"").charAt(0) != "1"){
        return false;
    }//if has one but not the other parantheses, return false
    else if (str.search(curve1) != -1 && str.search(curve2) == -1){
        return false;
    }
    else if (str.search(curve2) != -1 && str.search(curve1) == -1){
        return false;
    }//make sure regex match length is == str.length for false start with premature end
    else {
          if (str.search(regex) === 0 && str.match(regex).join("").length === str.length){
                return true;
          }
          return false;
    }   
};