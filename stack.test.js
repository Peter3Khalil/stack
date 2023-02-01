const Stack = require("./Stack")
let stack = new Stack();

describe('Test Stack methods in case : Stack is empty', () => {
    it('isEmpty should return true', () => {
        expect(stack.isEmpty()).toBeTruthy();
    });
    it('pop() it should return null', () => {
        expect(stack.pop()).toBe(null)
    });
    it('peak() should return null', () => {
        expect(stack.peek()).toBe(null);
    });
    it('size() should return 0', () => {
        expect(stack.size()).toBe(0);
    });
    
});

describe('Test Stack methods in case : Stack is not empty', () => {
    it('push() should insert element in last', () => {
        stack.push(10);
        expect(stack.peek()).toBe(10);
        stack.push(20);
        expect(stack.peek()).toBe(20);
        stack.push(-1);
        expect(stack.peek()).toBe(-1);
        stack.push(80);
        expect(stack.peek()).toBe(80);
    });
    it('size() should not be Zero', () => {
        expect(stack.size()).not.toBe(0)
    });
    
    it('isEmpty should return false', () => {
        expect(stack.isEmpty()).toBeFalsy();
    });
    it('pop() should return 80', () => {
        expect(stack.pop()).toBe(80)
    });
    
});




