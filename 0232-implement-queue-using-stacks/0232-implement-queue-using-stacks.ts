class MyQueue {
    private items: number[];
    constructor() {
        this.items = [];
    }

    push(x: number): void {
        this.items.push(x); // push/enqueue from back
    }

    pop(): number {
        return this.items.shift(); // dequque/shift from the front of the array
    }

    peek(): number {
        return this.items[0]; // front/1st element of the array
    }

    empty(): boolean {
        return this.items.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */