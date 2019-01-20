function BinaryHeap(value){
    this._root = (value != undefined ? new TreeNode(value, null, null) : null);

    //maxHeap = largest element as root, false = minHeap - smallest element as root
    this.maxHeap = true;

    //nextNewLeaf = when we do insert, the new leaf will be left/right child of this node.
    this.nextNewLeaf = this._root;
}

BinaryHeap.prototype.insert = function(value)
{
    var ptrNode, ptrParent;
    if(!this._root)
    {
        this._root = new TreeNode(value, null, null);
        this.nextNewLeaf = this._root;
        return;
    }

    if(this.nextNewLeaf.left === null)
    {
        ptrNode = this.nextNewLeaf.left = new TreeNode(value, null, null);
        ptrParent = ptrNode.parent = this.nextNewLeaf;
    }
    else if(this.nextNewLeaf.right === null)
    {
        ptrNode = this.nextNewLeaf.right = new TreeNode(value, null, null);
        ptrParent = ptrNode.parent = this.nextNewLeaf;

        //search tree for first node without a left. it's the new nextNewLeaf
        //use bfs. TODO: there might be a faster way to do this
        this.nextNewLeaf = this.bfs(function(node){
            return node.left === null;
        });
    }
    else
    {
        throw "Error inserting new value. No empty leaves available to pointed node";
    }

    //bubble up
    while(ptrParent && this.comparator(ptrNode.value, ptrParent.value))
    {
        this.swap(ptrNode, ptrParent);
    }
}

BinaryHeap.prototype.swap = function(ptrNode, ptrParent)
{
    var tempValueHolder = ptrNode.value;
    ptrNode.value = ptrParent.value;
    ptrParent.value = tempValueHolder;
    ptrParent = ptrParent.parent;
    ptrNode = ptrNode.parent;
}

BinaryHeap.prototype.extractMax = function()
{
    var ptrNode, extractedMax;

    //if no root return null
    if(!this._root)
    {
        return null;
    }
    else
    {
        extractedMax = this._root.value;
    }

    //remove max
    //if root only just get the root since we don't have nextNewLeaf
    if(!this._root.left && !this._root.right)
    {
        this._root = null;
        return extractedMax;
    }
    else
    {
        //max is now this.nextNewLeaf.right or .left if right is null.
        //remember to set nextnewleaf's children
        this._root.value = this.nextNewLeaf.right ? this.nextNewLeaf.right.value : this.nextNewLeaf.left.value;
        ptrNode = this._root;
    }

    //while ptrNode has children, compare children, swap with the largest value.
    while(ptrNode.left != null || ptrNode.right != null)
    {
        if(!ptrNode.right)
        {
            //left only
            if(this.comparator(ptrNode.left.value, ptrNode.value))
            {
                this.swap(ptrNode.left, ptrNode);
            }
            ptrNode = ptrNode.left;
        }
        else
        {
            //both
            if(this.comparator(ptrNode.right.value, ptrNode.left.value))
            {
                //go with right
                this.swap(ptrNode.right, ptrNode);
                ptrNode = ptrNode.right;
            }
            else
            {
                //go with left
                this.swap(ptrNode.left, ptrNode);
                ptrNode = ptrNode.left;
            }
        }
        //!ptrNode.left is impossible given how we set things
    }
    return extractedMax;
}

BinaryHeap.prototype.integrityCheck = function()
{
    //checks if binary heap is still a heap
    return this.bfs(function(node)
    {
        if(node.left && node.right)
        {
            return this.comparator(node, node.left) && this.comparator(node, node.right);
        }
        else if(node.right)
        {
            return true; //we shouldn't ever have a node with only a right child
        }
        else if(node.left)
        {
            return this.comparator(node, node.left);
        }
        else
        {
            return false;
        }
    }.bind(this)) == undefined;
}

//basic bfs that goes down a tree level-by-level like a step-pyramid using a queue
BinaryHeap.prototype.bfs = function(fnEvaluator)
{
    var queueNxtNodes = [this._root], currentNode;

    while(queueNxtNodes.length)
    {
        currentNode = queueNxtNodes[0];
        if(fnEvaluator(currentNode))
        {
            return currentNode;
        }
        else
        {
            //add left node to queue
            if(currentNode.left)
            {
                queueNxtNodes.push(currentNode.left);
            }
            //add right node to queue
            if(currentNode.right)
            {
                queueNxtNodes.push(currentNode.right);
            }
            //remove self from queue
            queueNxtNodes.shift();
        }
    }
}

//basic dfs that goes deep left before going right using a stack
BinaryHeap.prototype.dfs = function(fnEvaluator)
{
    var stackRightNodes = [], currentNode = this._root;

    while(currentNode)
    {
        if(fnEvaluator(currentNode))
        {
            return currentNode;
        }
        else
        {
            //if the node has a right child, add it to the stack
            if(currentNode.right)
            {
                stackRightNodes.push(currentNode.right);
            }

            //if the node has a left child, enter it.
            if(currentNode.left)
            {
                currentNode = currentNode.left;
            }
            else
            {
                //no more lefts, start consuming the stackRightNodes, starting with the last element.
                currentNode = stackRightNodes.pop();
            }
        }
    }
}

//used to sort newly added values and heapify tree
BinaryHeap.prototype.comparator = function(newNodeValue, parentNodeValue)
{
    if(this.maxHeap)
    {
        return newNodeValue > parentNodeValue;
    }
    return newNodeValue < parentNodeValue;
}