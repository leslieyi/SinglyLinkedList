class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}
 
class SinglyLinkedList {
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
 
    get(idx) {
      if(this.length === 0) return undefined;
      var temp = this.head;
 
      for(let i = 0; i < this.length; i++) {
          if(i === idx) {
            return temp.val;
            break;
          }
 
          temp = temp.next;
      }
    }
 
    pop(){
        if(this.length === 0) return undefined;
        //set temporary to the head
        let temp = this.head;
        let oldtail = this.tail;
 
        //loop through the list
        for(let i = 0; i < this.length; i++) {
          //if the temp.next is the tail set the temp.next to null because we are deleting it
          if(temp.next === this.tail) {
           
            temp.next = null;
            this.tail = temp;
            this.length--;
            return oldtail;
            break;
          } else {
            temp = temp.next;
          }
        }
    }
    
    set(idx, val) {
        if(this.length === 0) return false;
        let temp = this.head;
        for(let i = 0; i < this.length; i++) {
          if(i === idx) {
            temp.val = val;
            return true;
          }
          temp = temp.next;
        }
        return false;
    }
}