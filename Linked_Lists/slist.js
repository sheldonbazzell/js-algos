function SLNode(data){
	this.data = data;
	this.next = null;
}
function SList(){
	this.head = null;
}

SList.prototype.push = function(data) {

	var newNode = new SLNode(data);
	if(!this.head){
		this.head = newNode;
		return this;
	}

	else{
		var cur = this.head;
		while(cur.next){
			cur = cur.next;
		}
		cur.next = newNode;
		return this;

	}
};

SList.prototype.remove = function(data) {

	if(!this.head){
		return this;
	}
	else {

		if(this.head.data == data){
			this.head = this.head.next;
		}

		else {

			var cur = this.head;
			while(cur.next){
				if(cur.next.data == data){
					cur.next = cur.next.next;
					console.log("removed")
					return this;
				}
				cur = cur.next;
			}
			return this;

		}
	}
};
// bubble sort a linked list
SList.prototype.sort = function(){

	if(!this.head){
		return this;
	}
	// define boolean which will terminate 
	//outer loop when sort is complete
	else{
		var status = false, temp;
		while(status == false){
			var cur = this.head;
			status = true;
			while(cur.next){
				if(cur.data > cur.next.data){
					temp = cur.data;
					cur.data = cur.next.data;
					cur.next.data = temp;
					status = false;
				}
				cur = cur.next;
			}
		}

		return this;
	}
}

SList.prototype.insert = function(data, insertBefore) {

	var newNode = new SLNode(data);
	if(!this.head) {
		this.head = new SLNode(data);
		return this;
	}
	else{
		if(this.head.data == insertBefore) {
			newNode.next = this.head;
			this.head = newNode;
		}
		else {
			var cur = this.head;
			if(cur.next) {
				while(cur.next) {
					// find our insertion point
					if(cur.next.data == insertBefore) {
							newNode.next = cur.next;
							cur.next = newNode
							break;
					}
					cur = cur.next;
				}
			}
		}
		return this;
	}
};

SList.prototype.hasCycle = function() {
	if(this.head.next) {
		var runner = this.head.next,
		    cur    = this.head;
		while(cur.next) {
			if(runner == cur) {
				return true;
			}
			runner = runner.next;
			cur = cur.next;
		}
	}
	return false;
}

myList = new SList()
myList.push(2).push(4).push(1).push(10)
myList.sort()
myList.remove(1)
console.log(JSON.stringify(myList))