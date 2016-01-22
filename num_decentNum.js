function main(n){
        var numFiveChunks = 0;
        var numThreeChunks = 0;
        while(n%3!==0){				//while n is not divisible by 3, keep dropping 5
            numThreeChunks +=1;
            n-=5;
        }
        while(n-3>=0){				//once it is, throw in "555"s like no tommorow
            numFiveChunks +=1;
            n-=3;
        }
        if(n!==0){
            console.log(-1);
        }
        else{
            var FiveChunk = Array.apply(null, Array(3*numFiveChunks)).map(Number.prototype.valueOf,5).join("");
            var ThreeChunk = Array.apply(null, Array(5*numThreeChunks)).map(Number.prototype.valueOf,3).join("");
            console.log(FiveChunk+ThreeChunk);
        }
}
main(3);
main(5);
main(6);
main(9);
main(10);
main(11);
