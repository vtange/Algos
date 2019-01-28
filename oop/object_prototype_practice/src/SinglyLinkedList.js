function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function SinglyLinkedList(value) {
	this.content = {};
	this._head = null;
    this._tail = null; //last node
	if(value != undefined)
	{
		this._head = this._tail = new LinkedListNode(value);
	}
}

SinglyLinkedList.prototype.add = function(name,value){
	if(true)//name != undefined && value != undefined)
	{
		//create a new item object, place data in
		var node = this.content[name] = new LinkedListNode(value);

		//attach at the end
		if (this._tail) {
			this._tail.next = node;
			this._tail = node;
		}
		else {
			//start list
			this._head = this._tail = node;
		}
	}
};

SinglyLinkedList.prototype.remove = function(name){
	var target = this.content[name];
	var prevNode = findPrev(this.content,function(node){
		return node.next == target;
	});
	var nextNode = target.next;
	console.log("remove", name, "prev", prevNode, "next", nextNode)

	//single node loop
	if(prevNode == target)
	{
		//target
		this._head = null;
		this._tail = null;
	}
    else if (prevNode) {
		if(nextNode){
			//prev, target, next
			prevNode.next = nextNode;
			if(nextNode == this._head)
			{
				this._tail = prevNode;
			}
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

SinglyLinkedList.prototype.get = function(name){

	return this.content[name];
};

SinglyLinkedList.prototype.makeLoop = function(){
	if(this._head && this._tail){
		this._tail.next = this._head;
	}
	else{
		throw "tried to make a loop from nothing";
	}
};

function findPrev( obj, test ) {
    for( var prop in obj ) {
		if( obj.hasOwnProperty(prop) && test(obj[prop]) ){
			return obj[prop];
		}
    }
};

// Best solution
function hasLoop(startNode){
	var slowNode = startNode;
	var fastNode = startNode;
	//do a check if 2 and 3 even exist
	while (slowNode && slowNode.next && fastNode.next.next){
	  slowNode = slowNode.next;
	  fastNode = fastNode.next.next;
	  if (slowNode == fastNode) return true;
	}
	return false;
  }