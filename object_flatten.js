var flattenObject = function(obj) {
    var newobj = {};
	
	for (var prop in obj) {
		if (!obj.hasOwnProperty(prop)) continue;
		
		if ((typeof obj[prop]) == 'object') {
			var flatObject = flattenObject(obj[prop]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				newobj[prop + '.' + x] = flatObject[x];
			}
		} else {
			newobj[prop] = obj[prop];
		}
	}
	return newobj;
};
flattenObject({"a":1,"b":2,"c":{"c":4 , "d":5}});