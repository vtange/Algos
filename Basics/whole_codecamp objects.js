var Person = function(firstAndLast) {
    var obj = Object.create(Person.prototype);
    obj.full = firstAndLast;
    splitname = firstAndLast.split(" ");
    obj.first = splitname[0];
    obj.last = splitname[1];
    //3 more keys for the sake of keys I guess
    obj.one = 1;
    obj.two = 2;
    obj.three = 3;

    return obj;
};

Person.prototype.getFirstName = function(){
	return this.first;
	};

Person.prototype.setFirstName = function(first){
    splitname[0] = first;
    this.first = splitname[0];
    this.full = splitname.join(" ");
	};

Person.prototype.getLastName = function(){
    return this.last;
	};

Person.prototype.setLastName = function(last){
    splitname[1] = last;
    this.last = splitname[1];
    this.full = splitname.join(" ");
	};

Person.prototype.getFullName = function(){
    return this.full;
	};

Person.prototype.setFullName = function(firstAndLast){
    this.full = firstAndLast;
    splitname = firstAndLast.split(" ");
    this.first = splitname[0];
    this.last = splitname[1];
	};


var bob = new Person('Bob Ross');
bob.getFullName();


//-----------------------------------------------------------

var Person = function(firstAndLast) {
    var obj = Object.create(Person.prototype);
    splitname = firstAndLast.split(" ");
    obj.getFirstName = function(){
        return splitname[0];
	};
    obj.setFirstName = function(first){
        splitname[0] = first;
        this.first = splitname[0];
        this.full = splitname.join(" ");
    };
    obj.getLastName = function(){
        return splitname[1];
    };
    obj.setLastName = function(last){
        splitname[1] = last;
        this.last = splitname[1];
        this.full = splitname.join(" ");
    };
    obj.getFullName = function(){
        return splitname.join(" ");
    };
    obj.setFullName = function(firstAndLast){
        this.full = firstAndLast;
        splitname = firstAndLast.split(" ");
        this.first = splitname[0];
        this.last = splitname[1];
    };

    return obj;
};


var bob = new Person('Bob Ross');
bob.getFullName();



//-----------------------------------------------------------




function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

for(var i = 0; i < arr.length; i++){

//add orbitalPeriod
  arr[i].orbitalPeriod = arr[i].avgAlt;

//set "a" for equation
  var orbit = earthRadius+arr[i].avgAlt;
  var athree = Math.pow(orbit, 3);

//calculate
  arr[i].orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(athree/GM));


//done using avgAlt, delete it.
  delete arr[i].avgAlt;

}


  return arr;
}



orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);


//-----------------------------------------------------------


function pairwise(arr, arg) {
    var sum = [0];

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if (arr[i] + arr[j] == arg && i != j){
                console.log(arr[i]);
                console.log(arr[j]);
                sum.push(i);
                sum.push(j);
             arr[i] = arg+1;
             arr[j] = arg+1;
            }
        }
    }
  console.log(arr);
  console.log(sum);

  sum = sum.reduce(function(a, b) {
        return a + b;
});

return sum;
}


pairwise([1, 3, 2, 4], 4);

