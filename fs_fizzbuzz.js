
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        var digits = /(\d+)/g;
        var n1 = parseInt(line.match(digits)[0],10);
        var n2 = parseInt(line.match(digits)[1],10);
        var n3 = parseInt(line.match(digits)[2],10);
        console.log(fizbuz(n1, n2, n3));
        //console.log(answer_line);
    }
});

function fizbuz(num1, num2, num3){
    var str = "";
    for (var i = 1; i <= num3; i++){
        if (i % num1 === 0 && i % num2 === 0){
            str = str + " " + "FB";
        }
        else if(i % num1 === 0){
            str = str + " " + "F";
        }
        else if(i % num2 === 0){
            str = str + " " + "B";
        }
        else{
            str = str + " " + i;
        }
    }
    return str;
}