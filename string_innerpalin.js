function inner_palindrome(str) {
    var longest = "";
    //if whole str is a palindrome already return the length
    if(str.toLowerCase()===str.toLowerCase().split("").reverse().join("")){
        return str.length;
    }
    //would later make it so i and j don't overlap
    //i starts from start of str, squeeze ->
    //j starts from end of str, squeeze <-
    for(var i=0;i<str.length;i++){
        for(var j=str.length-1;j>str.length;j--){
            var chunk = str.slice(i,j).toLowerCase();
            if(chunk===chunk.split("").reverse().join("")){
                if(chunk.length > longest.length){
                    longest = chunk;
                }
            }
        }
    }
    return longest;
}

console.log(longest_palindromic_substring("guatemala"));//"ala"