/**
 * 并发控制器
 * @class Concurrence
 */
 export class Concurrence {
    /**
     * 构造函数
     * @name constructor
     * @param {number} maxCount 最大并发数
     */
    constructor(maxCount: number);

    /**
     * 添加任务
     * @param {function} fn 所需要添加的任务
     * @name addTask
     */
    addTask(fn: Function): Concurrence;
}