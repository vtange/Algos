//Create an object

	///////
	//# 1//
	///////
//by literal notation - one time use

var Person = {
    // add properties to this object!
    name: "George",
	age: 4
};

//Classes - constructor notation objects - functions that return an object. 'this = Object.Create' and 'return this' is implicit

function Person(name,age) {
  this.name = name;
  this.age = age;
}
//===> Objects created will be of Person.prototype, followed by Object.prototype

// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);



function Person(name,age) {
  return {name:name,age:age};
}
//===> Objects created will be of Object.prototype, not Person.prototype, since we return literals.




	///////
	//# 2//
	///////
//by constructor/function notation
//			all object properties and methods are in one spot, but everything is unique. every Car with have new move method.
var Car = function(make, insured, loc) {
	var obj = {loc : loc};
    obj.make = make;
    obj.insured = insured;
	obj.move = move;
	return obj;
};

var move = function(){
		this.loc++;
	};
//this ^ is done so we only have 1 definition of move. but we will still have multiple instances of move.



//-------if we want to make MORE methods like move, it's better to make an object with all desired methods, and then 'extend' Car with that object.
var Car = function(make, insured, loc) {
    var obj = {loc : loc};
    obj.make = make;
    obj.insured = insured;
	extend(obj, methods);		//requires javascript plugin for "extend"
	return obj;
};

var methods = {
	move: function(){
		this.loc++;
	},
	brakes: function(){
		console.log('screech!')
	},
	shoot: function(){
		console.log('bang!')
	}
};




	///////
	//# 3//
	///////
//by prototype notation
var Car = function(make, insured, loc) {
    var obj = Object.create(Car.prototype);
	obj.make = make;
	obj.insured = insured;
	obj.loc = loc;
	return obj;
};
Car.prototype.move = function(){
		this.loc++;
	};
//function Car returns objects of Car.prototype. All cars will have the move() function, but can have different make, insured, loc depending on init value.


	///////
	//# 4//
	///////
// by pseudoclassical notation, TECHNICALLY SAME AS #3

var Focus = new Car("Ford", true, 10);

////////		this is same as saying :

var Car = function(make, insured, loc) {
						var obj = Object.create(Person.prototype);   //======> using 'new' syntax adds this automatically
	obj.insured = insured;
	obj.loc = loc;
						return obj; //=======================================> using 'new' syntax adds this automatically
};
Car.prototype.move = function(){
		this.loc++;
	};





//________________________________________________
// Making methods

function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function () {
        console.log("Hello!")
    }
}

var user = new Person("Codecademy Student",false);
user.speak();

//detailed
var james = {
    job: "programmer",
    married: false,
    speak: function( mood ) {
        console.log("Hello, I am feeling " + mood)
    }
};

james.speak("great");
james.speak("just okay");

// Problem: ^ method will lead to many "speak" functions, one for each Person. (High memory consumption)
//________________________________________________
//adding methods to constructor objects via prototype

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();



//________________________________________________
//change properties

var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + this.job)
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer"

// james' second job
james.sayJob();


//________________________________________________
//calling object properties

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"
console.log(james[aProperty]);

//________________________________________________

//list all properties

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for (var property in nyc) {
    console.log(nyc[property]);
};





//________________________________________________
//private variable (bankBalance)

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person
var john = new Person("John","Connor",24)

// try to print his bankBalance
console.log(john["bankBalance"])

//________________________________________________
//getting private variable values from public scope

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance)

//________________________________________________
//private method

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   var returnBalance = function() {
      return bankBalance;
   };

   // create the new function here
   this.askTeller = function() {
       return returnBalance;
   }
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);
