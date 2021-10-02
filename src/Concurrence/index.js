class Concurrence {
    constructor(maxCount) {
        this.taskQueue = [];
        this.current = 0;
        this.maxCount = maxCount;
    }

    addTask(fn) {
        const workFn = () => {
            this.current += 1;
            fn().finally(() => {
                this.current -= 1;
                this.runTask();
            });
        };
        this.taskQueue.push(workFn);
        if (this.current >= this.maxCount) return this;
        this.runTask();
        return this;
    }

    runTask() {
        const workFn = this.taskQueue.shift();
        if (workFn) workFn();
    }
}

export {
    Concurrence,
};
