function inventory(arr1, arr2) {
    var nameList = [];
    for (var i=0;i<arr1.length;i++){
        nameList.push(arr1[i][1]);
    }
    for (var j=0;j<arr2.length;j++){
        //console.log(arr2[j][1]);
        //console.log(nameList.indexOf(arr2[j][1]));
        //console.log(arr2[j][0]+arr1[j][0]);
        if (nameList.indexOf(arr2[j][1]) != -1){
            arr1[nameList.indexOf(arr2[j][1])][0] += arr2[j][0];
        }
        else{
            arr1.push(arr2[j]);
        }
    }
    return arr1.sort(function(a,b){
        return a[1] > b[1];
    });
}