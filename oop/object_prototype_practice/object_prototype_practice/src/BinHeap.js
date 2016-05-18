function TreeNode(value){
	this.parent = null;
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

BinaryHeap.prototype.add = function(value){
	var tree = this.content;
	//start at node 0;
	var currBatch = [0];
	var nextBatch = [];
	
	function runBatch(){
		//start next batch
		if(nextBatch.length>0){
			currBatch = nextBatch;
			nextBatch = [];
		}
		currBatch.forEach(function(num){
			//min heap: root is smallest
			if(!tree[num]){
				tree[num] = new TreeNode(value);
				break;
			}
			else{
				if(tree[num].value > value){
					tree[num].value = value;
				}
			}
			//prepare next batch
			nextBatch.push((2*num)+1)
			nextBatch.push((2*num)+2)
		});
	}

}

BinaryHeap.prototype.travel = function(payload){

}