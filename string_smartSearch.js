function smartSearch(str,long_str) {
    var T = str.indexOf("T");
    var C = str.indexOf("C");
    var G = str.indexOf("G");
    var A = str.indexOf("A");
    var pre = function(ltr){
        return str.slice(0,ltr);
    };
    var backtrack = function(){
        switch(long_str[i]){
            case "T": return long_str.slice(i-pre(T),i)===pre(T) ? T:0;
            case "C": return long_str.slice(i-pre(C),i)===pre(C) ? C:0;
            case "G": return long_str.slice(i-pre(G),i)===pre(G) ? G:0;
            case "A": return long_str.slice(i-pre(A),i)===pre(A) ? A:0;
            default: return 0;
        }
    };
    var index = 0;
    var currSearchFor = function(index){
        return str[index];
    };

    for(var i=0;i<long_str.length;i++){
        if(long_str[i] === currSearchFor(index)){
            //run outta chars to search for
            if(!str[index+1]){
                return true;
            }
            //search next letter in str
            else{
                index++;
            }
        }
        //wrong char, go back to most meaningful state
        else{
            index = backtrack();
        }
    }
    return false;
}
