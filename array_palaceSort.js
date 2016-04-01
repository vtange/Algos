//sort for the game Palace

var hand = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//should = [3,4,5,6,9,11,12,13,1,7,8,2,10];
function isMagicOrAce(n){
    return n === 1 || n === 2 || n === 7 || n === 8 || n === 10;
};
function isMagic(n){
    return n === 2 || n === 7 || n === 8 || n === 10;
};
function sortHand(a,b){
            // 1, 7, 8, 2, 10 in front
            if(isMagicOrAce(a)){
                //magics infront of 1
                if(isMagic(b)){
                    //move 2 over 7 and 8
                    if(a===2){
                        if(b===7||b===8){
                            return 1;
                        }
                        else{
                            return -1;
                        }
                    }
                    else{
                        return -1;
                    }
                }
                else{
                    return 1;
                }
            }
            else{
                if(isMagicOrAce(b)){
                    return -1;
                }
                return a > b;
            }
};