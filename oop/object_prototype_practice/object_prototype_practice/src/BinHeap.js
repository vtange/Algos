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
	var addFn = addNode.bind(this,value);

	return traverse.call(this,this.root,addFn);
}

BinaryHeap.prototype.get = function(value){
	var getFn = getNode.bind(this,value);

	return traverse.call(this,this.root,getFn);
}

BinaryHeap.prototype.record = function(arr){
	var recFn = breadCrumbs.bind(this,arr);

	console.log(traverse.call(this,this.root,recFn));
}


function addNode(){
	var value = arguments[0];
	var node = arguments[1];
	if(!this.root){
		console.log("added "+value+" as root");
		this.root = new TreeNode(value);
		return true;
	}
	else if(value < node.value){
		console.log("replaced "+node.value+" with "+value);
		node.value = [value, value = node.value][0];
		this.add(value);
		return true;
	}
	else if(!node.left){
		console.log("added "+value+" left of "+ node.value);
		node.left = new TreeNode(value);
		return true;
	}
	else if(!node.right){
		console.log("added "+value+" right of "+ node.value);
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
	return false;
}

function breadCrumbs(){
	var arr = arguments[0];
	var node = arguments[1];
	if(this.root===node){
		arr.push(this.root.value);
	}
	if(node.left)
		arr.push(node.left.value);
	if(node.right)
		arr.push(node.right.value);
	console.log(arr);
	return false;
}

function traverse(node,method){
	var next = [node];
	var result;

	function processNode(node,fn){
		//delete first element of next
		if(next.length){
			next.splice(0,1);
		}

		//run fn if result is still falsey
		if(!result){
			result = fn(node);
		}

		//check if we have a truthy return on the fn
		if(!result){
			//prep next
			if(node.left)
				next.push(node.left);
			if(node.right)
				next.push(node.right);
			console.log(next);
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