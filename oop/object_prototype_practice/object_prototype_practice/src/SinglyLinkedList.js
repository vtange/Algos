function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function SinglyLinkedList() {
    this.content = {};
	//no head, since we can't do prev
    this._tail = null; //last node
}

SinglyLinkedList.prototype.add = function(name,value){

        //create a new item object, place data in
        var node = this.content[name] = new LinkedListNode(value);

        //attach at the end
        if (this._tail) {
            this._tail.next = node;
            this._tail = node;
        }
		else {
			//start list
            this._tail = node;
        }

};

SinglyLinkedList.prototype.remove = function(name){
	var target = this.content[name];
	var prevNode = findPrev(this.content,function(node){
		return node.next == target;
	});
    var nextNode = this.content[name].next;
    if (prevNode) {
		if(nextNode){
			//prev, target, next
			prevNode.next = nextNode;
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
		}
		else{
			//target
			this._tail = null;
		}
	}
	delete this.content[name];
};

SinglyLinkedList.prototype.get = function(name){

	return this.content[name];
};

function findPrev( obj, test ) {
    for( var prop in obj ) {
		if( obj.hasOwnProperty(prop) && test(obj[prop]) ){
			return obj[prop];
		}
    }
};