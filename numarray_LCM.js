//________________________________________________________________________________________________


function smallestCommons(arr) {
//make an array covering range of numbers. divide them until no !pair of two!
//in the whole range can be anymore.
//multiply the remaining range

arr = arr.sort(function(a, b){return a>b;});
var range = [];
var divi = [];
var primes = [2,2,3,5];
primes = primes.sort(function(a, b){return a<b;});

//make range
    for (var i = arr[0]; i <= arr[1]; i++){
        range.push(i);
    }

//cycle through each prime
for (var j = 0; j < primes.length; j++) {

    for (var k = 0; k < range.length; k++) {
        if (range[k]%primes[j] === 0){
             console.log(range[k] +"/"+  primes[j] + "...OK" );
             range[k] /= primes[j];
        }
    }
//push number in prime and log the state of range
divi.push(primes[j]);
console.log(range);
}

console.log(divi);

var lcm = range.reduce(function(a, b){return a*b;}) * divi.reduce(function(a, b){return a*b;});

return lcm;
}


smallestCommons([1,13]);
