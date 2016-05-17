function LinkedListNode(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList() {
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
	delete this.content[name];
};

DoublyLinkedList.prototype.get = function(name){

	return this.content[name];
};