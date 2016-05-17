
//========================METHODS========================



// Be careful with the substring's letter positions!
"wonderful day".substring(3,7)





//========================CONTROL FLOW==============================

//else if
var isEven = function(number) {
  // Your code goes here!
  if(number%2 === 0) {
      return true;
  }
  else if(isNaN(number)) {
      return "Numbers only please"
  }
  else {
      return false;
  }
};

//_____________________________________________________________
//cases

var getReview = function (movie) {
    switch (movie) {
        case "Toy Story 2":
            return "Great story. Mean prospector."

        case "Finding Nemo":
            return "Cool animation, and funny turtles."

        case "The Lion King":
            return "Great songs."

        default:
            return "I don't know!"
    }
};


var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}



//_____________________________________________________________
//logical operators
// "&&" == AND - BOTH MUST BE TRUE TO BE 'TRUE'
true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false

// "||" == OR
true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false

//"!" == NOT

!true;   // => false
!false;  // => true

// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}



var answer = (((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");








//========================LOOPS & ARRAYS==============================
//========================ARRAYS
// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,56];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[58] % 8 !== 0;

//--------------------------------------------------------------
// picking out array stuff
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]) == JavaScript
console.log(languages.length) == 5

for (var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
};
//== prints all of them

//---------------------------------------------------------------
//types of arrays
//heterogenous (can have number, boolean, string, or objects)

var fourty = new Object;

var myArray = [1, true, "three", fourty]

//
//jagged array
var jagged = [[1, 3], [2]]


//
//array in array
var newArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


//
//multidimensional array
var oompaloompa = new Object;
var newArray = [ [1, 3, 5, 7], [oompaloompa]]






//========================LOOPS
// for loop

for (i = 1; i <= 20; i++) {
    if (i %3 === 0) {
        if (i %5 === 0){
            console.log ("FizzBuzz");
        }
        else {
            console.log ("Fizz");
        }
    }
    else if (i %5 === 0) {
        if (i %3 === 0) {
            console.log ("FizzBuzz");
        }
        else {
            console.log ("Buzz");
        }
    }
    else {
        console.log (i);
    }
}



// Edit this for loop!

for (var i = 5; i <= 50; i+=5) {
	console.log(i);
}
//_____________________________________________________________
//while loop (example uses strict equals -> cannot use '0', only 0

var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


not_in_choppa = true

var getToDaChoppa = function(not_in_choppa){
  // Write your do/while loop here!
  do {
  console.log("GET TO DA CHOPPA! NOW! IF YOU WANT TO LIVE!");
} while(not_in_choppa);
not_in_choppa = false;
}

getToDaChoppa();


//****************************
//WHEN TO USE LOOP?
//for when you know when it ends
//while when you don't know when it ends (dangerous, can infinite loop)
//****************************
count = 0

while (count <= 9) {
    console.log(count);
    count++;
};

for (i = 100; i <= 110; i = i+2) {
    console.log(i);
};


