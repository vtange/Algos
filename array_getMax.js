function getMax(arr){
    return arr.reduce(function(total,item){
    if(total < item){
        total = item;
    }
    return total;
    });
}

getMax([1,500,600,1]);


//returning an object with reduce

getMinMax([1,500,600,1]);

function getMinMax(arr){
    return arr.reduce(function(obj,next){
        if(obj.min>next){
            obj.min=next;
        }
        if(obj.max<next){
            obj.max=next;
        }
        return obj;
    },{min:Infinity,max:-Infinity});
}