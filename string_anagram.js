var a  = "mary";
var b = "army";

function anagram(a,b){
    var mem = [];
    var str = a+b;
    for(let i = 0; i<str.length;i++){
        console.log(mem);
        if(mem.indexOf(str[i])===-1){
            mem.push(str[i]);
        }
        else{
            mem.splice(mem.indexOf(str[i]),1);
        }
    }
    console.log(mem);
    return mem;
}
anagram(a,b);