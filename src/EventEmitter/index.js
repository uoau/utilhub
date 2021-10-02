class EventEmitter {
    constructor() {
        this.events = Object.create(null);
        this.eventCount = 0;
        return new Proxy(this, {
            get(target, propKey) {
                if (propKey === 'eventCount') {
                    return Object.keys(target.events).length;
                }
                return target[propKey];
            },
        });
    }

    on(eventName, listener) {
        if (!Array.isArray(this.events[eventName])) {
            this.events[eventName] = [];
        }
        const evnetListeners = this.events[eventName];
        evnetListeners.push(listener);
        return this;
    }

    emit(eventName, ...args) {
        const evnetListeners = this.events[eventName];
        if (evnetListeners) {
            evnetListeners.forEach((fn) => fn(...args));
        }
        return this;
    }

    off(eventName, listener) {
        const evnetListeners = this.events[eventName];
        if (evnetListeners) {
            const index = evnetListeners.findIndex((e) => e === listener);
            if (index > -1) evnetListeners.splice(index, 1);
        }
        return this;
    }

    eventNames() {
        return Object.keys(this.events);
    }

    listeners(eventName) {
        return this.events[eventName];
    }
}

export {
    EventEmitter,
};
