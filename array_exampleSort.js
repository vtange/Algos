function exampleSort(arr,exampleArr){
	var count = {};
	var newArr = "";
	arr.forEach(function(element){
		if(!count.hasOwnProperty(element)){
            count[element] = 1;
        }
		else{
			count[element]++;
		}
	});
	exampleArr.forEach(function(element){
		if(count.hasOwnProperty(element)){
            newArr += Array(count[element]+1).join(element);
        }
	});
	if(arr[0].constructor === Number){
	    return newArr.split("").map(Number);
	}
	return newArr.split("");
}
var arr = [1,2,3,4,5,5,5,5];

console.log(exampleSort(arr,[2,3,5,4,1]));