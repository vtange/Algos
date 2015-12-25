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

//12/18 crappy recursive way, impossible to breakup array of more than one element without making a new one.

function steamroll2(arr){
    var flatten = function(input){
        if(input.constructor == Array){
            if(input.length>1){
                return steamroll2(input);
            }
            return flatten(input[0]);
        }
        else{
            return input;
        }
    };
    arr.forEach(function(input){
      arr[arr.indexOf(input)] = flatten(input); 
    });
    return arr;
}

steamroll2([[1,2],[[[[4]]],5]]);

//make new array -> hillclimbing style flatten
//update 12/19 avoid var in each loop

function steamroll2(arr){
    var newarr = [];
    var checkElement = function(element){
        if(element.constructor == Array){
                element.forEach(function(piece){
                    checkElement(piece);
                });
            }
        else{
                newarr.push(element);
        }
    };
    arr.forEach(function(input){
        checkElement(input);
    });
    return newarr;
}

steamroll2([[1,2],[[[[[[4]]]]],5]]);


