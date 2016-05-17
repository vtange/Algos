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

        //start list
        if (this._length === 0) {
            this._tail = node[name];
        }
		else {
            //attach at the end
            this._tail.next = node[name];
            this._tail = node[name];
        }

};

SinglyLinkedList.prototype.remove = function(name){

    var nextNode = this.content.name.next;

	if(nextNode){
		//target, next
		this.content.name.value = nextNode.value;
		this.content.name.next = nextNode.next;
	}
	else{
		//target
		this._tail = null;
	}
	delete this.content.name;
};