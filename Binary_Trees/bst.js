function BST() {
	this.root = null;
}

function BTNode(data) {
	this.data = data;
	this.leftChild = null;
	this.leftChild = null;
}

BST.prototype.push = function(data) {
	if(!this.root) {
		this.root = new BTNode(data);
		return this;
	} else {
		return this.root.push(data);
	}
};

BTNode.prototype.push = function(data) {
	if(data < this.data) {
		if(this.leftChild) {
			return this.leftChild.push(data);
		} else {
			this.leftChild = new BTNode(data);
		}
	} else {
		if(this.rightChild) {
			return this.rightChild.push(data);
		} else {
			this.rightChild = new BTNode(data);
		}
	}
	return this;
}

BST.prototype.getMin = function() {
	if(!this.root) {
		return -1;
	}
	else {
		return this.root.getMin();
	}
}

BTNode.prototype.getMin = function() {
	if(this.leftChild) {
		return this.leftChild.getMin();
	}
	else {
		return this;
	}
}

BST.prototype.getMax = function() {
	if(!this.root) {
		return -1;
	} else {
		return this.root.getMax();
	}
}

BTNode.prototype.getMax = function() {
	if(this.rightChild) {
		return this.rightChild.getMax();
	} else {
		return this;
	}
}

BST.prototype.contains = function(data) {
	if(this.root) {
		if(this.root.data == data) {
			return true;
		} else {
			return this.root.contains(data);
		}
	} else {
		return false;
	}
}

BTNode.prototype.contains = function(data) {
	if(data == this.data) {
		return true;
	} else {
  		if(data < this.data) {
			if(this.leftChild) {
				return this.leftChild.contains(data);
			} else {
				return false;
			}
		} else {
			if(this.rightChild) {
				return this.rightChild.contains(data);
			} else {
				return false;
			}
		}
	}
}

BST.prototype.remove = function(valToRemove){
    if(this.root != null){

        if(this.root.data == valToRemove){
            var tempNode = new BTNode();
            tempNode.leftChild = this.root;
            this.root.remove(valToRemove, tempNode);
            this.root = tempNode.leftChild;
        } else {
            this.root.remove(valToRemove);
        }
    }
}
BTNode.prototype.remove = function(data, parentNode){

    if(data < this.data){

        if(this.leftChild != null){
            this.leftChild.remove(data, this);
        }

    } else if (data > this.data){

        if(this.rightChild){
            this.rightChild.remove(data, this);
        }

    } else {

        if(this.leftChild && this.rightChild){ 
            this.data = this.rightChild.getMin();
            this.rightChild.remove(this.data, this);

        } else if(parentNode.leftChild == this){

            if(this.leftChild){
                var tempNode = this.leftChild;
            } else {
                var tempNode = this.rightChild;
            }
            parentNode.leftChild = tempNode;

        } else if(parentNode.rightChild == this){

            if(this.leftChild){
                var tempNode = this.leftChild;
            } else {
                var tempNode = this.rightChild;
            }
            parentNode.rightChild = tempNode;
        }
    }
}

BST.prototype.inOrderTraversal = function() {
	if(this.root) {
		return this.root.inOrderTraversal();
	}
	return -1
}

BTNode.prototype.inOrderTraversal = function() {
	if(this.leftChild){
	    this.leftChild.inOrderTraversal();
	}
	console.log(this.data);
	if(this.rightChild){
	    this.rightChild.inOrderTraversal();
	}
}

BST.prototype.preOrderTraversal = function() {
	if(this.root) {
		return this.root.preOrderTraversal();
	}
	return -1;
};

BTNode.prototype.preOrderTraversal = function() {
	console.log(this.data);
	if(this.leftChild) {
		this.leftChild.preOrderTraversal();
	}
	if(this.rightChild) {
		this.rightChild.preOrderTraversal();
	}
};

BST.prototype.postOrderTraversal = function() {
	if(this.root) {
		return this.root.postOrderTraversal();
	}
	return -1;
};

BTNode.prototype.postOrderTraversal = function() {
	if(this.leftChild) {
		this.leftChild.postOrderTraversal();
	}
	if(this.rightChild) {
		this.rightChild.postOrderTraversal();
	}
	console.log(this.data);
};

myBST = new BST();
myBST.push(5)
myBST.push(10)
myBST.push(3)
myBST.push(4)
myBST.push(6)
myBST.push(2)
myBST.remove(5)
// console.log(JSON.stringify(myBST))
console.log(myBST)
// myBST.root.inOrderTraversal();

