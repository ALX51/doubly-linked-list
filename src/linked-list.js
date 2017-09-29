const Node = require('./node');
class LinkedList {
    constructor() {      
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) { 
        
      if (this.length == 0) {
        var node = new Node(data);
        this.length = 1;
        this._tail = node;
        this._head = node;
      } else {
        var node = new Node(data);
        this._tail.next = node;
        var nod = this._tail; 
        this._tail  = node
        this._tail.prev = nod;
        this.length += 1;          
      }
    
      return this;
    }

    head() {
      if (this.length == 0) {
        return null;
      }
      return this._head.data;
    }

    tail() {
      if (this.length == 0) {
        return null;
      }
      return this._tail.data;
    }

    at(index) { 
       if (index == 0) {
           return this._head.data;
       } else {
           var indexNode = this._head;
           for (var i = 0; i < index; i++ ) { 
                indexNode = indexNode.next
            }
           
        return indexNode.data;
       }
    }

    insertAt(index, data) {
      if ((this.length == 0) || (this.length == index)) {
        this.append(data);
      } else if (index == 1) {
         var indexNode = this._head.next;
         var node = new Node(data, this._head, indexNode); 
         indexNode.prev = node;
           this._head.next = node; 
         this.length += 1; 
      } else {          
          var indexNode = this._head;
          var indexNext = this._head.next;
          for (var i = 1; i < index ; i++ ) {
              indexNode = indexNode.next;
              indexNext = indexNode.next;
          }              
               var node = new Node(data, indexNode, indexNext);
                indexNode.next  = node;
                indexNext.prev = node;
                this.length += 1;
            }
          
            
      }
    

    isEmpty() {
      if (this.length == 0) {
        return true;
      }
      return false;
    }

    clear() {      
      this.length = 0;
      this._head = null;
      this._tail = null;
      return this;
    }

    deleteAt(index) {
      if ((this.length == 1) && (index == 0)) {
        this.clear()
      }  else {
        var indexPrev = this._head;
        var indexDelet = this._head.next || undefined;
        var indexNext = this._head.next.next || undefined;  
        for (var i = 1; i < index ; i++ ) {
              indexPrev = indexDelet;
              indexDelet = indexNext;
              indexNext = indexNext.next;
          }              
                indexPrev.next = indexNext;
                
                indexNext.prev = indexPrev;
                this.length -= 1;
      }
      return this
    }

    reverse() {
      if (this.length <= 1) {
          return this;
      }
      var node = this._head;
      var  arr = [];
        arr[0] = node;
      for (var i = 1; i < this.length; i++) {
          arr[i] = node.next;
          node = node.next;
      }
      arr[arr.length - 1].next = arr[arr.length - 2];
      arr[arr.length - 1].prev = null;
      arr[0].next = null;
      arr[0].prev = arr[1]; 
      for (i = (arr.length - 1); i > 1; i-- )  {
          arr[i].next = arr[i - 1];
          arr[i].prev = arr[i + 1];
      }
    
      this._head = arr[arr.length - 1];
      this._tail =  arr[0];
      return this
    }

    indexOf(data) {
      var node = this._head;
      for (var i = 0; i < this.length; i++) {
        if ( node.data == data ) {
          return i;
        }
        node = node.next;
      }
      return -1;
    }
  }


module.exports = LinkedList; 
