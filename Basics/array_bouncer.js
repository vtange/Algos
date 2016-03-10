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