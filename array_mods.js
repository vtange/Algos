//check if [1,1,1]
Array.prototype.allValuesSame = function() {

    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }

    return true;
}

//like filter or reduce but stops at first found element that passes test
Array.prototype.getFirstElementThat = function(test) {

    for(var i = 0; i < this.length; i++)
    {
        if (test(this[i])){
			return this[i];
		}
    }
	return null;
}
