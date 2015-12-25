//________________________________________________________________________________________________

function convert(num) {
  //start high -> if num can't be subtracted with etc, 50, 10, 5, 1 ,
  //add coresponding letter M, D, C, L, X, V, I,

  var romaNum = [];

  while (num-1000 >= 0) {

      console.log(num);
      romaNum.push("M");


      num -= 1000;
  }
  while (num-900 >= 0) {

      console.log(num);
      romaNum.push("CM");


      num -= 900;
  }
  while (num-500 >= 0) {

      console.log(num);
      romaNum.push("D");


      num -= 500;
  }
  while (num-400 >= 0) {

      console.log(num);
      romaNum.push("CD");


      num -= 400;
  }
  while (num-100 >= 0) {

      console.log(num);
      romaNum.push("C");


      num -= 100;
  }
  while (num-90 >= 0) {

      console.log(num);
      romaNum.push("XC");


      num -= 90;
  }
  while (num-50 >= 0) {

      console.log(num);
      romaNum.push("L");


      num -= 50;
  }
  while (num-40 >= 0) {

      console.log(num);
      romaNum.push("XL");


      num -= 40;
  }
  while (num-10 >= 0) {

      console.log(num);
      romaNum.push("X");


      num -= 10;
  }
  while (num-9 >= 0) {

      console.log(num);
      romaNum.push("IX");


      num -= 9;
  }
  while (num-5 >= 0) {

      console.log(num);
      romaNum.push("V");


      num -= 5;
  }
  while (num-4 >= 0) {

      console.log(num);
      romaNum.push("IV");


      num -= 4;
  }
  while (num-1 >= 0) {

      console.log(num);
      romaNum.push("I");


      num -= 1;
  }


  romaNum = romaNum.join("");


 return romaNum;
}

convert(3700);