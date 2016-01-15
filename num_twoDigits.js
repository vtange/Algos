//toFixed will round, must purely chop input

function twoDecimalPlaces(number) {
  // Your code here
  var str = number.toString();  //stringform
  var dotIsAt = str.search(/[\.]/);   //find dot
  return parseFloat(str.substring(0,(dotIsAt+3)),10); //paresfloat substring 2 spaces from dot
}