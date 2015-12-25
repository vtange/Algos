function permAlone(str) {
 var letters = str.split("");
 var diversity = function (elem, index, self) {
    return index == self.indexOf(elem);
};
 var total = 1;
 var lastletter;
 var noRepeat = function (input) {
          return input != lastletter;
 };
  for (var i=0;i<str.length;i++){
      console.log("pass #" + i);
      console.log("total at " + total + ", last letter was " + lastletter);
      console.log(letters);

      if (lastletter){
      console.log(letters.filter(noRepeat) + ", so total * " + Math.max(1,letters.filter(noRepeat).length));
      total*=Math.max(1,letters.filter(noRepeat).length);
      }
      else{
      console.log("choose from " + letters.filter(diversity)+", so total *" + letters.filter(diversity).length);
          total*=Math.max(1,letters.filter(diversity).length);
      }
      
      lastletter = str.charAt(i);
      letters.splice(letters.indexOf(lastletter),1);
  }
  
  return total;
}

permAlone('abfdefa');


/// the bruteforce generator method 


function permAlone(str) {
var letters = str.split("");
var arr=[];
var repeat = /([a-z])\1+/g;
var noRepeat = function (input) {
        return input.search(repeat) === -1;
};
//heaps algo thanks to http://blog.boyet.com/blog/blog/generating-permutations-with-heap-rsquo-s-algorithm/
var generatePermutations = function (items, process) {
  "use strict";
  var generate = function (last, items, process) {
    var
      i,
      swap = function (x, y) {
        //console.log(x + " <=> " + y);
        var temp = items[x];
        items[x] = items[y];
        items[y] = temp;
      };

    //console.log(last);
    if (last === 0) {
      process(items);
    }
    else {
      // if last is even
      if ((last & 1) !== 1) { 
        for (i = 0; i < last; i += 1) {
          generate(last - 1, items, process);
          swap(0, last);
        }
      }
      // else last is odd
      else {
        for (i = 0; i < last; i += 1) {
          generate(last - 1, items, process);
          swap(i, last);
        }
      }
      generate(last - 1, items, process);
    }
  };

  generate(items.length - 1, items, process);
};

generatePermutations(letters, function (items) {
  arr.push(items.join(""));
});

  return arr.filter(noRepeat).length;
}

permAlone('abab');
