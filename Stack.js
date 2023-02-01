class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element); // O(1)
    }
    pop(){
        return this.isEmpty()? null: this.items.pop(); // O(1)
    }
    peek(){
        return this.isEmpty() ? null : this.items[this.size()-1]; // O(1)
    }
    isEmpty(){
        return this.size() ===0; // O(1)
    }
    size(){
        return this.items.length; // O(1)
    }
}
module.exports = Stack;