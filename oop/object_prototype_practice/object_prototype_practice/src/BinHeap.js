function TreeNode(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinaryHeap(value){
	this.root = null;
	if(value){
		this.root = new TreeNode(value);
	}
}

/*-----*/
/* Breadth First Search */
/*-----*/

BinaryHeap.prototype.add = function(value){
	var tree = this.content;
	var addFn = addNode.bind(this,value);

	return traverse.call(this,this.root,addFn);
}

BinaryHeap.prototype.get = function(value){
	var tree = this.content;
	var getFn = getNode.bind(this,value);

	return traverse.call(this,this.root,getFn);
}

function addNode(){
	var value = arguments[0];
	var node = arguments[1];
	if(!this.root){
		this.root = new TreeNode(value);
		return true;
	}
	else if(value < node.value){
		node.value = [value, value = node.value][0];
		this.add(value);
		return true;
	}
	else if(!node.left){
		node.left = new TreeNode(value);
		return true;
	}
	else if(!node.right){
		node.right = new TreeNode(value);
		return true;
	}
	return false;
}

function getNode(){
	var value = arguments[0];
	var node = arguments[1];
	if(node.value === value){
		return node;
	}
	if(!node){
		return "No Node Found";
	}
	return false;
}

function breadCrumbs(node){
	
}

function traverse(node,method){
	var next = [node];
	var result;

	function processNode(node,fn){
		//delete first element of next
		if(next.length){
			next.splice(0,1);	
		}

		//run operation, if true, stop. if false, append to next
		var operation = fn(node);

		//check if operation is finished
		if(!operation){
			//prep next
			if(node.left)
				next.push(node.left);
			if(node.right)
				next.push(node.right);
		}
		else{
			return operation;
		}
	}

	result = processNode(this.root,method);
	while(next.length){
		//don't overwrite result with falsey value
		result = processNode(next[0],method) || result;
	}
	return result;
}


/*-----*/
/* Depth First Search */
/*-----*/