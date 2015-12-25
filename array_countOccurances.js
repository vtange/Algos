
function counter(){
//1 declare a array to store number counts per array
    var record = [];
    
    //2. loop through each array, count number of occurances each number
    for (var j=0;j<arguments.length;j++){
        var counts = {};
        
        for(var i = 0; i< arguments[j].length; i++) {
            var num = arguments[j][i];
            counts[num] = counts[num] ? counts[num]+1 : 1;
            if (counts[num] == counts[num]){
                console.log("repeat for " + counts[num])
            }
        }
        record[j] = counts;
    }
    return record;
}
counter([1,4,5,5,6,6],[3,3,4,4,5]);

//UPDATE 12/10 COUNT STRINGS. RETURN ONE OBJECT


function counter(){
//1 declare a array to store number counts per array
    var counts = {};
    //2. loop through each array, count number of occurances each number
    for (var j=0;j<arguments.length;j++){ 
        console.log(arguments[j]);
        for(var i = 0; i< arguments[j].length; i++) {
            var num = arguments[j][i];
            counts[num] = counts[num] ? counts[num]+1 : 1;
            if (counts[num] == counts[num]){
                console.log(counts[num] + " " + num);
            }
        }
    }
    return counts;
}
counter(["artichoke", "sundried tomatoes", "mushrooms"],
["roma", "sundried tomatoes", "goats cheese", "rosemary"],
["black beans", "jalapenos", "mushrooms"],
["blue cheese", "garlic", "walnuts"],
["spinach", "kalamata olives", "sesame seeds"]);