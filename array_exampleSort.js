Array.prototype.exampleSort = function(exampleArr){
	var count = {};
	var newArr = "";
	this.forEach(function(element){
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
	if(this[0].constructor === Number){
	    return newArr.split("").map(Number);
	}
	return newArr.split("");
}

var arr = [1,2,3,4,5,5,5,5];

console.log(arr.exampleSort([2,3,5,4,1]))