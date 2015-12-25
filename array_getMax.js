function getMax(arr){
    return arr.reduce(function(total,item){
    if(total < item){
        total = item;
    }
    return total;
    });
}

getMax([1,500,600,1]);