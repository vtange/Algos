//recursive


function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;//this is going to repeat some options, if given a big number
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
//  (((1 * 3) + 5) * 3)





//while

function findSolution(target) {
  function find(start, history) {
    while (start !== target){
    if (start > target){
      console.log("whoops");
      console.log(eval(history));
      return null;//this is going to repeat some options, if given a big number
    }else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
    }
    return history;
  }
  return find(1, "1");
}

console.log(findSolution(24));
//  (((1 * 3) + 5) * 3)