
function sym(args) {

//flattens arrays
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
//the answer
var Special = [];
//1. push all seen numbers into a array/ flatten them
var numbers = steamroller(arguments);
//2.filter numbers to remove any duplicates
numbers = numbers.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});
//3. loop thru numbers array, for each number, keep a true/false that is true
//if number is found in odd number of arrays and false if otherwise
for (var k=0;k<numbers.length;k++){
    //console.log("searching for " + numbers[k]);
    var special = false;
    for(var m = 0; m< arguments.length; m++) {
        //console.log("searching thru " + arguments[m]);
        if(arguments[m].indexOf(numbers[k]) != -1){
            if(special === false){
            //console.log("true for " + numbers[k]);
            special = true;
            }
            else{
                //console.log("untrue for " + numbers[k]);
                special = false;
            }
        }
    }
    // if special is still true, push to specials array
    // if specials array has it already, delete it
    if (special === true){
        //console.log(numbers[k]);
        Special.push(numbers[k]);
    }
}

return Special;
}
