
function ranger(arr) {
//make an array covering range of numbers. reduce it-
//-while multiplying them all, then start dividing starting from 1.
var range = [];

    for (var i = arr[0]; i <= arr[1]; i++){
        range.push(i);
    }
	//for multiplying them all
    //var lcm = range.reduce(function(a, b){return a*b;});

    return range;
}

ranger([1,5]);