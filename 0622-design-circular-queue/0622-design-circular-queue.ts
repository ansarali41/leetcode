class MyCircularQueue {
    queue: number[] = [];
    private size: number;

    constructor(k: number) {
        this.size = k;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false;
        this.queue.push(value);
        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;

        this.queue.shift();
        return true;
    }

    Front(): number {
        if(this.isEmpty()) return -1;
        return this.queue[0];
    }

    Rear(): number {
        if(this.isEmpty()) return -1;
        return this.queue[this.queue.length - 1];
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    isFull(): boolean {
        return this.queue.length === this.size;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */