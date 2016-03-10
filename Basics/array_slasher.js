//________________________________________________________________________________________________
//start at the end and repeating from the start, splice off "howMany" numbers.

function slasher(arr, howMany) {
  // it doesn't always pay to be first

  return arr.splice(howMany,arr.length-howMany);
}

slasher([1, 2, 3], 2);

//UPDATE 12/7
//________________________________________________________________________________________________
//slice start, keep the end 

function slasher(arr, howMany) {
  // it doesn't always pay to be first
                    //2         //3
  return arr.slice(howMany,arr.length);
}

slasher([1, 2, 3,4,5], 2);