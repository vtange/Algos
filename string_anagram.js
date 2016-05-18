var a  = "mary";
var b = "army";

function anagram(a,b){
    var mem = {};
    var str = a+b;
    for(let i = 0; i<str.length;i++){
        console.log(mem);
        if(!mem.hasOwnProperty(str[i])){
            mem[str[i]] = 1;
        }
        else{
            delete mem[str[i]];
        }
    }
    console.log(mem);
    return mem;
}
anagram(a,b);