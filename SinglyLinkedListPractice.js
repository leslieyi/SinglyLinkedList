//Linked List 
//Data structure that contains head, tail and length of the linked list
//it consists of node, each node has a value and a pointer to another note or null,
//It has no index, so Random access is not allowed


class Node{
//class keyword creates a CONSTANT, so you cannot redefine it.

    //Method to create new objects MUST be caleld constructor
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){//instance method 
        let newNode = new Node(val); 
        //Create a new node using the value params
        
        //If there is no head, set the head and tail to be newly created node
        //Else set the next property on the tail to be the new node and set the tail property to be the newly created node. 
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //increment the count
        //return the list
        this.length++;
        return this;
    }
    
    
    
}
var list = new SinglyLinkedList();
list.push("Hi")
list.push("Bye")
console.log(list)