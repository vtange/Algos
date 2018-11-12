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
	if(!this.root){
		this.root = new TreeNode(value);
		return true;
	}
	return bfs.call(this,this.root,addFn);
}

BinaryHeap.prototype.get = function(value){
	var getFn = getNode.bind(this,value);

	return bfs.call(this,this.root,getFn);
}

BinaryHeap.prototype.record = function(arr){
	var recFn = breadCrumbs.bind(this,arr);

	return bfs.call(this,this.root,recFn);
}

function addNode(){
	var value = arguments[0];
	var node = arguments[1];
	if(node){
		if(!this.root){
			//console.log("added "+value+" as root");
			this.root = new TreeNode(value);
			return true;
		}
		else if(value < node.value){
			//console.log("replaced "+node.value+" with "+value);
			node.value = [value, value = node.value][0];
			this.add(value);
			return true;
		}
		else if(!node.left){
			//console.log("added "+value+" left of "+ node.value);
			node.left = new TreeNode(value);
			return true;
		}
		else if(!node.right){
			//console.log("added "+value+" right of "+ node.value);
			node.right = new TreeNode(value);
			return true;
		}
	}
	return false;
}

function getNode(){
	var value = arguments[0];
	var node = arguments[1];
	if(node){
		if(node.value === value){
			return node;
		}
		if(node.left){
			if(node.left.value === value)
			return node.left;
		}
		if(node.right){
			if(node.right.value === value)
			return node.right;
		}
	}
	return false;
}

function breadCrumbs(){
	var arr = arguments[0];
	var node = arguments[1];
	if(node){
		if(this.root===node)
			arr.push(this.root.value);
		if(node.left)
			arr.push(node.left.value);
		if(node.right)
			arr.push(node.right.value);
	}
	else{
		return arr;
	}
	return false;
}

function bfs(node,method){
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
			if(!next.length){
				//run fn with no node, ends functions like breadCrumbs.
				result = fn();
			}
		}
	}(this.root,method);
	//^ immediate invoke with root and method
	
	while(next.length){
		//don't overwrite result with falsey value
		result = processNode(next[0],method) || result;
	}
	return result;
}


/*-----*/
/* Depth First Search */
/*-----*/

BinaryHeap.prototype.recorddfs = function(arr){
	var recFn = deadCrumbs.bind(this,arr);

	return dfs.call(this,this.root,recFn);
}

function deadCrumbs(){
	var arr = arguments[0];
	var node = arguments[1];
	if(node){
		arr.push(node.value);
	}
	else{
		return arr;
	}
	return false;
}

function dfs(node,method){
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
				next.splice(0,0,node.left);
			if(node.right)
				next.splice(1,0,node.right);
			if(!next.length){
				//run fn with no node, ends functions like deadCrumbs.
				result = fn();
			}
		}
	}(this.root,method);
	//^ immediate invoke with root and method
	
	while(next.length){
		//don't overwrite result with falsey value
		result = processNode(next[0],method) || result;
	}
	return result;
}