/**
 * @name 事件发射器
 */
 export class EventEmitter {
    /**
     * @name 事件发射器
     */
    constructor();
    readonly eventCount: number;
    readonly events: array;

    /**
     * @name 设置监听
     * @param {string} eventName 事件名
     * @param {function} listener 监听函数
     */
    on(eventName: string, listener: Function): EventEmitter;

    /**
     * @name 触发事件
     * @param {string} eventName 事件名
     * @param {any} args 要传递给监听函数的参数
     */
    emit(eventName: string, ...args: any[]): EventEmitter;

    /**
     * @name 注销某个事件下的监听函数
     * @param {string} eventName 事件名
     * @param {function} listener 原监听函数
     */
    off(eventName: string, listener: Function): EventEmitter;

    /**
     * @name 获取所有注册的事件
     * @param {string} eventName 事件名
     * @param {function} listener 监听函数
     */
    eventNames(): string[];

    /**
     * @name 获取某个事件下的所有监听函数
     * @param {string} eventName 事件名
     * @param {function} listener 监听函数
     */
    listeners(eventName): Function[];
}