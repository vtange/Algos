
//________________________________________________________________________________________________
function pair(str) {
    // make new array DNA
    // for every G, add GC, for every C, add CG, etc.

    //if you want to make a proper one, you first remove already completed pairs
    //out of the original string, then do the bottom. "GGCTATGC" -> "GgctaTgc"
    //use RegExp "GC", "CG", "AT", "TA" to make checkers

    var DNA = [];

    for (var i = 0; i < str.length; i++) {

        if (str[i] == "G") {
            DNA.push(["G","C"]);
        }
        if (str[i] == "C") {
            DNA.push(["C","G"]);
        }
        if (str[i] == "A") {
            DNA.push(["A","T"]);
        }
        if (str[i] == "T") {
            DNA.push(["T","A"]);
        }
    }



 return DNA;
}

pair("GGCTATGC");