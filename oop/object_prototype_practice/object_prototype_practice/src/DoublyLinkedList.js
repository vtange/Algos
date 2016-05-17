function LinkedListNode(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList() {
	this.circular = false;
    this.content = {};
    this._head = null; //first node
    this._tail = null; //last node
}

DoublyLinkedList.prototype.add = function(name,value){

        //create a new item object, place data in
        var node = this.content[name] = new LinkedListNode(value);

        //start list
        if (!this._head) {
            this._head = node;
            this._tail = node;
        }
		else {
            //attach at the end
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
		if (this.circular) {
			this.makeLoop();
		}

};

DoublyLinkedList.prototype.remove = function(name){

    var prevNode = this.content[name].prev;
    var nextNode = this.content[name].next;

    if (prevNode) {
		if(nextNode){
			//prev, target, next
			prevNode.next = nextNode;
			nextNode.prev = prevNode;
		}
		else{
			//prev, target
			prevNode.next = null;
			this._tail = prevNode;
			console.log(this);
		}
    }
	else{
		if (nextNode) {
			//target, next
			nextNode.prev = null;
			this._head = nextNode;
		}
		else{
			//target
			this._head = null;
			this._tail = null;
		}
	}
	if (this.circular) {
		this.makeLoop();
	}
	delete this.content[name];
};

DoublyLinkedList.prototype.get = function(name){

	return this.content[name];
};

DoublyLinkedList.prototype.toggleCircular = function(){
	if(this.circular){
		this.circular = false;
		this.breakLoop();
	}
	else{
		this.circular = true;
		this.makeLoop();
	}
}

DoublyLinkedList.prototype.makeLoop = function(){
	if(this._head && this._tail){
		console.log(this._head);
		console.log(this._tail);
		this._head.prev = this._tail;
		this._tail.next = this._head;
	}
	else{
		throw "tried to make a loop from nothing";
	}
};

DoublyLinkedList.prototype.breakLoop = function(){
	if(this._head.prev && this._tail.next){
		this._head.prev = null;
		this._tail.next = null;
	}
	else{
		throw "tried to break a loop that doesn't exist";
	}
};