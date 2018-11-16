function TreeNode(value, left, right){
	this.value = value;
	this.left = left || null;
	this.right = right || null;
}

function serialize(node)
{
	if(node) return JSON.stringify([node.value,[serialize(node.left),serialize(node.right)]]);
    else return null;
}

function deserialize(str)
{
	var node, treeNode;
	if(str){
		node = JSON.parse(str);
		treeNode = new TreeNode(node[0]);
		if(node[1][0] !== null)
		{
			//left
			treeNode.left = deserialize(node[1][0]);
		}
		if(node[1][1] !== null)
		{
			//right
			treeNode.right = deserialize(node[1][1]);
		}
	}
	else return null;
	return treeNode;
}