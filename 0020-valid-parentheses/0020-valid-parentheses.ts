class MyStack<T>{
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
    top(): T | undefined {
        return this.items[this.items.length - 1];
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    size(): number {
        return this.items.length;
    }

}

function isValid(s: string): boolean {
    const stack = new MyStack<string>();

    const pairs: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

     for (const ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            if (stack.isEmpty() || stack.top() !== pairs[ch]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
};

