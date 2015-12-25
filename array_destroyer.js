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