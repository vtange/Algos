function StackElement(value) {
    this.value = value;
}

function Stack() {
    this.content = [];
}

Stack.prototype.add = function(value){
	var card = new StackElement(value);
	this.content.push(card);
}

Stack.prototype.peek = function(value){
	var card = new StackElement(value);
	return this.content[this.content.length-1];
}

Stack.prototype.draw = function(){
	if(!this.content.length) return null;
	return this.content.pop();
}