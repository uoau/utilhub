/**
 * 事件发射器
 * @class EventEmitter
 */
export class EventEmitter {
    /**
     * 构造函数
     * @name constructor
     */
    constructor();

    /**
     * 事件数量
     * @name eventCount
     */
    readonly eventCount: number;

    /**
     * 所有事件
     * @name events
     */
    readonly events: array;

    /**
     * 设置监听
     * @param {string} eventName 事件名
     * @param {function} listener 监听函数
     * @name on
     */
    on(eventName: string, listener: Function): EventEmitter;

    /**
     * 触发事件
     * @param {string} eventName 事件名
     * @param {any} args 要传递给监听函数的参数
     * @name emit
     */
    emit(eventName: string, ...args: any[]): EventEmitter;

    /**
     * 注销某个事件下的监听函数
     * @param {string} eventName 事件名
     * @param {function} listener 原监听函数
     * @name off
     */
    off(eventName: string, listener: Function): EventEmitter;

    /**
     * @name 获取所有注册的事件
     * @param {string} eventName 事件名
     * @param {function} listener 监听函数
     * @name eventNames
     */
    eventNames(): string[];

    /**
     * 获取某个事件下的所有监听函数
     * @param {string} eventName 事件名
     * @param {function} listener 监听函数
     * @name listeners
     */
    listeners(eventName): Function[];
}