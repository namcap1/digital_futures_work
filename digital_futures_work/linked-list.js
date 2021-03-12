//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class DoublyLinkedListNode{
  constructor(data){
    this.data = data;
    this.next = null;
    this.previous = null;
  }
  reset(){
    this.next = null;
    this.previous = null;
  }
}

export class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  push(data) {
    const newNode = new DoublyLinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
        this.tail.next = newNode;
        newNode.previous = this.tail;
    }
    this.tail = newNode;
  }

  pop() {
    let current = this.tail;
    this.tail = current?.previous || null;
    if(this.head === current){
      this.head = null;
    }else if(this.head.next === current){
      this.head.next = null;
    }
    current?.reset();
    return current.data;
  }

  shift() {
    const data = this.head.data;
    this.head = this.head.next;
    return data; 
  }

  unshift(data) {
    const newNode = new DoublyLinkedListNode(data);
    if(this.head === null){
      this.head = newNode;
    }
    else{
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  }

  delete(value) {
    let current = this.head;
    while(current?.data !== value && current){
      current = current.next;
    }
    if(current === this.head){
      return this.shift();
    }else if(current === this.tail){
      return this.pop();
    }else if(current){
      current.previous.next = current.next;
      current.next.previous = current.previous;
      return current.data;
    }
  }

  count() {
    let ans = 0;
    let current = this.head;
    while(current !== null){
      ans++; 
      current = current.next;
    }
    return ans;
  }
}

