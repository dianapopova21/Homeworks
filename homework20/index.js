class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}
class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    getSize() {
        return this.length;
    }
    getHead() {
        return this.head;
    }
    add(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    remove(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.data === value) {
                if(currentNode === this.head && currentNode === this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                else if(currentNode === this.head) {
                    this.head = this.head.next;
                    this.head.previous = null;
                }
                else if(currentNode === this.tail) {
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                }
                else {
                    currentNode.previous.next = currentNode.next;
                    currentNode.next.previous = currentNode.previous;
                }
                this.length--;
                break;
            }
            else {
                currentNode = currentNode.next;
            }
        }
    }
    search(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.data === value) {
                return currentNode;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return 'Element not found';
    }
    toArray() {
        const arr = [];
        let currentNode = this.head;
        while(currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

const myLinkedList = new doublyLinkedList();

myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);

console.log(myLinkedList.toArray());

myLinkedList.remove(2);

console.log(myLinkedList.toArray());

console.log('Size - ', myLinkedList.getSize());
console.log('Head - ', myLinkedList.getHead());
console.log(myLinkedList.search(1));
console.log(myLinkedList.search(2));