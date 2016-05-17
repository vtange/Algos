function QueueElement(value) {
    this.value = value;
}

function Queue() {
    this.content = [];
}

Queue.prototype.add = function(value){
	var card = new StackElement(value);
	this.content.unshift(card);
}

Queue.prototype.peek = function(value){
	var card = new StackElement(value);
	return this.content[0];
}

Queue.prototype.draw = function(){
	if(!this.content.length) return null;
	return this.content.shift();
}