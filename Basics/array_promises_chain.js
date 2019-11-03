
//(()=>Promise)[]
/*
var funcs = [function(){
    console.time();
    return new Promise(function(rs,rj){
        window.setTimeout(function(){
            console.timeLog();
            rs();
            console.log("1: END");
        },3000);
    })
},function(){
    return new Promise(function(rs,rj){
        window.setTimeout(function(){
            rs();
            console.timeEnd();
            console.log("2: END");
        },5000);
    })
}];

/*
var promise = funcs[0]();
for (var i = 1; i < funcs.length; i++)
    promise = promise.finally(funcs[i]);
*/
//alternative
//funcs.reduce((prev, cur) => prev.finally(cur), Promise.resolve());