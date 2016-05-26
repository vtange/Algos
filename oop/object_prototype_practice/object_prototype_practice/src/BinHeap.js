function TreeNode(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinaryHeap(value){
	this.content = {};
	if(value){
		this.content[0] = new TreeNode(value);
	}
	this.root = this.content[0] || null;
}

/*-----*/
/* Breadth First Search */
/*-----*/

BinaryHeap.prototype.add = function(value){
	var tree = this.content;
	var hand = value;
	//start at node 0;
	var currBatch = [0];
	var nextBatch = [];

	while(hand){
		for(let i = 0; i<currBatch.length;i++){
			//debug use
			////console.log(hand + " -> " + currBatch[i]);
			//min heap: root is smallest
			if(!tree[currBatch[i]]){
				tree[currBatch[i]] = new TreeNode(hand);
				hand = null;
				break;
			}
			else{
				if(tree[currBatch[i]].value > hand){
					//swap current value of tree with one on hand
					tree[currBatch[i]].value = [hand, hand = tree[currBatch[i]].value][0];
				}
			}
			//prepare next batch
			nextBatch.push((2*currBatch[i])+1);
			nextBatch.push((2*currBatch[i])+2);
		};
		currBatch = nextBatch;
	}
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

/*-----*/
/* Depth First Search */
/*-----*/

function traverse(node,method);
	var next = [];
	
;

function processNode(node,[]){
	[].push(node.value)
	if(node.left)
		next.push(node.left);
	if(node.right)
		next.push(node.right);
}