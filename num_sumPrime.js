//________________________________________________________________________________________________

function sumPrimes(num) {
  var primes = [];
  var sieve = [];
    for (var i = 2; i <= num; i++) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
			// use https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes to mark multiples of 2, 3, 4, 5, etc as you go. avoid repeats
            for (var j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }

  return primes.reduce(function(a, b){return a+b;});
}

sumPrimes(10);