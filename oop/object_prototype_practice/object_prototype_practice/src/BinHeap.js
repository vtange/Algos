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

	traverse.call(this,this.root,addFn);
}

BinaryHeap.prototype.get = function(value){
	var tree = this.content;
	var hand = null;
	//start at node 0;
	var currBatch = [0];
	var nextBatch = [];

	while(!hand){
		for(let i = 0; i<currBatch.length;i++){
			//debug use
			////console.log(hand + " -> " + currBatch[i]);
			//min heap: root is smallest
			if(!tree[currBatch[i]]){
				break;
			}
			else{
				if(tree[currBatch[i]].value === value){
					return tree[currBatch[i]];
				}
			}
			//prepare next batch
			nextBatch.push((2*currBatch[i])+1)
			nextBatch.push((2*currBatch[i])+2)
		};
		currBatch = nextBatch;
	}	
}

function addNode(){
	var value = arguments[0];
	var node = arguments[1];
	if(!this.root){
		this.root = new TreeNode(value);
		return true;
	}
	else if(!node.left){
		node.left = new TreeNode(value);
		return true;
	}
	else if(!node.right){
		node.left = new TreeNode(value);
		return true;
	}
	return false;
}

function breadCrumbs(node){
	
}

function traverse(node,method){
	var next = [node];

	function processNode(node,fn){
		//delete first element of next
		if(next.length){
			next.splice(0,1);	
		}
		//run operation, if true, stop. if false, append to next
		//check if operation is finished
		if(!fn(node)){
			//prep next
			if(node.left)
				next.push(node.left);
			if(node.right)
				next.push(node.right);
		}
	}

	processNode(this.root,method);
	while(next.length){
		processNode(next[0],method);
	}
}


/*-----*/
/* Depth First Search */
/*-----*/