let Node = require('../../Base/Node.class');

module.exports = class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
    getIndexOf(value) {
        let current = this.head; // current is a head of our list
        let index = 0; // index which will be returned

        while (current) {
            if (current.value === value) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }
}