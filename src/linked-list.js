const Node = require('./node');
//не понял условие продерки метода append ( _head, _tail)

class LinkedList extends Node {
    constructor() {
        super()
        this.arr = [];
        this.length = this.arr.length;        
    }

    append(data) {        
        this.arr.push(data);
        this.length = this.arr.length;
        return this;
       
    }

    head() {        
        if (this.arr[0]) {
            return this.arr[0];
        } else {
            return null;
        }
    }

    tail() {        
        if (this.arr[this.arr.length - 1]) {
            return this.arr[this.arr.length - 1];
        } else {
            return null;
        }
    }

    at(index) {         
        return this.arr[index];
    }

    insertAt(index, data) {
        this.arr[index] = data;
        this.length = this.arr.length;
         return this;
    }

    isEmpty() {        
        if (this.arr == 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this.arr.length = 0;
         return this;        
    }

    deleteAt(index) {         
        this.arr.splice(index, 1);
        this.length = this.arr.length;
         return this;       
    }

    reverse() {         
        Array.prototype.reverse.call(this.arr);        
         return this;        
    }

    indexOf(data) {        
        return this.arr.indexOf(data);        
    }
}

module.exports = LinkedList; 
