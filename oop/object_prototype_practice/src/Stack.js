function StackElement(value) {
    this.value = value;
}

function Stack() {
    this.content = {};
	this.length = 0;
}

Stack.prototype.add = function(value){
	var card = new StackElement(value);
	this.length++;
	this.content[this.length] = card;
}

Stack.prototype.peek = function(){
	return this.content[this.length];
}

Stack.prototype.draw = function(){
	if(!this.length) return null;
	else{
		var card = {value:this.content[this.length].value};
		delete this.content[this.length];
		this.length--;
		return card;
	}
}