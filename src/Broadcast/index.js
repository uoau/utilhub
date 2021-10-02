import { EventEmitter } from '../EventEmitter';

class Broadcast extends EventEmitter {
    constructor(channelId) {
        super();
        this.channelId = channelId;
        this.storeKey = `broadcast-${channelId}`;
        window.addEventListener('storage', this.listener.bind(this));
    }

    emit(type, ...args) {
        localStorage.setItem(this.storageKey(type), JSON.stringify({
            timeStamp: new Date().getTime(),
            data: args,
        }));
    }

    listener(e) {
        const eventName = Object.keys(this.events)
            .find((type) => this.storageKey(type) === e.key);
        if (eventName) {
            const { data } = JSON.parse(localStorage.getItem(this.storageKey(eventName)));
            const evnetListeners = this.events[eventName];
            if (evnetListeners) {
                evnetListeners.forEach((fn) => fn(...data));
            }
        }
    }

    storageKey(type) {
        return `${this.storeKey}-${type}`;
    }
}

export {
    Broadcast,
};
