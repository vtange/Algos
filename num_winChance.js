function winChance(baseChance, numShots){
    if((baseChance^0) === baseChance){
        baseChance *= 0.01;
    }
    var loseChance = 1-baseChance;
    return ((1-Math.pow(loseChance,numShots))*100).toFixed(2) + "%";
}