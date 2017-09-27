const Node = require('./node');
class LinkedList {
    constructor() {
      this.list = [];
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      if (this.length == 0) {
        this.list[0] = new Node(data);
        this.length = 1;
        this._tail = this.list[0];
        this._head = this.list[0];
      } else {
        this.list[this.length] = new Node(data, this.list[this.length -1].data);
        this.list[this.length -1].next =  this.list[this.length].data;
        this.length = this.list.length;
        this._tail = this.list[this.length - 1];          
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
      return this.list[index].data;
    }

    insertAt(index, data) {
      if (this.length == 0) {
        this.append(data);
      } else if ((this.length - 1 ) == index){
          this.list[index].data = data;
          this.list[index - 1].next = data;
      } else {
        this.list[index].data = data;
        if ((this.list[index - 1].next) != null) {
          this.list[index - 1].next = data;
        }
        if ((this.list[index + 1].prev) != null) {
          this.list[index + 1].prev = data;
        }
      }
    }

    isEmpty() {
      if (this.length == 0) {
        return true;
      }
      return false;
    }

    clear() {
      this.list = [];
      this.length = 0;
      this._head = null;
      this._tail = null;
      return this;
    }

    deleteAt(index) {
      if ((this.length == 1) && (index == 0)) {
        this.clear()
      } else {
        if (index == 0) {
          this.list[index + 1].prev = null;
          this.list.splice(index, 1);
          this.length -= 1;
          return this
        }
        if (index == this.list.length) {
          this.list[index - 1].next = null;
          this.list.splice(index, 1);
          this.length -= 1;
          return this
        }
        this.list[index - 1].next = this.list[index + 1].data;
        this.list[index + 1].prev = this.list[index - 1].data;
        this.list.splice(index, 1);
        this.length -= 1;
      }
      return this
    }

    reverse() {
      if (this.length > 1) {
        this.list[0].next = null;
        this.list[0].prev = this.list[1].data;
        this.list[this.length - 1].next = this.list[this.length - 2].data
        this.list[this.length - 1].prev = null;
        this._tail = this.list[0];
        this._head = this.list[this.length - 1];
        for (var i = 1; i < (this.list.length - 1); i++) {
          this.list[i].next = this.list[i - 1].data;
          this.list[i].prev = this.list[i + 1].data;
        }
        this.list.reverse();
      }
      return this
    }

    indexOf(data) {
      for (var i = 0; i < this.list.length; i++) {
        if ( this.list[i].data == data ) {
          return i;
        }
      }
      return -1;
    }
  }

module.exports = LinkedList; 
