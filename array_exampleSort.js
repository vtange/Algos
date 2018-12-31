function exampleSort(arr,exampleArr){
	var count = {};
	var newArr = [];
	arr.forEach(function(element){
		if(!count.hasOwnProperty(element)){
            count[element] = [element];
        }
		else{
			count[element].push(element);
		}
	});
	exampleArr.forEach(function(element){
		if(count.hasOwnProperty(element)){
           newArr = newArr.concat(count[element]);
        }
	});
	if(arr[0].constructor === Number){
	    return newArr.map(Number);
	}
	return newArr;
}

//ON^2
function exampleSort(arr, exampleArr){
	arr.sort( (x,y) => exampleArr.indexOf(x) - exampleArr.indexOf(y) );
	return arr;
}

//use space to reduce time ^
function exampleSort(arr, exampleArr){
	var seen = Object.create(null);
	for(var i=0;i<exampleArr.length;i++)
	{
		if(!seen[exampleArr[i]])
		{
			//save first index we see for this array
			seen[exampleArr[i]] = i;
		}
	}
	return arr.sort( (x,y) => seen[x] - seen[y] );
}

var arr = [1,2,3,4,5,5,5,5];

console.log(exampleSort(arr,[2,3,5,4,1]));


Test.assertDeepEquals(exampleSort([1,2,3,4,5],[2,3,4,1,5]),[2,3,4,1,5]);
Test.assertDeepEquals(exampleSort([1,2,3,3,3,4,5],[2,3,4,1,5]),[2,3,3,3,4,1,5]);
Test.assertDeepEquals(exampleSort([1,2,3,3,3,5],[2,3,4,1,5]),[2,3,3,3,1,5]);
Test.assertDeepEquals(exampleSort([1,2,3,3,3,5],[3,4,5,6,9,11,12,13,1,7,8,2,10]),[3,3,3,5,1,2]);
Test.assertDeepEquals(exampleSort(["a","a","b","f","d","a"],["c","a","d","b","e","f"]),["a","a","a","d","b","f"]);
Test.assertDeepEquals(exampleSort(["Alice","Bryan","Chad","Darrell","Ellie","Fiona"],["Alice","Bryan","Chad","Darrell","Ellie","Fiona"]),["Alice","Bryan","Chad","Darrell","Ellie","Fiona"]);

var randomNumber = Test.randomNumber();

Test.assertDeepEquals(exampleSort([randomNumber,1,4,randomNumber],[1,2,3,4,randomNumber]),[1,4,randomNumber,randomNumber]);
