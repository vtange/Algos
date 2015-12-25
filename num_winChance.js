function winChance(baseChance, numShots){
    if(baseChance > 1){
        baseChance *= 0.01;
    }
    var loseChance = 1-baseChance;
    return ((1-Math.pow(loseChance,numShots))*100).toFixed(2) + "%";
}
