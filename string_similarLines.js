
var arr = ["mary had a little lamb", "one day, there was a wolf","hello world"];

var str = "mary had a little lamb";


function similarLines(arr, str){
    var hits = [];
    arr.forEach(function(element){
        if (element == str){
            hits.push(element);
        }
    });
    return hits;
}
similarLines(arr,str);