/**
 * @param {object}option 配置
 * @param {number}[option.time=12] 时间1
 * @param {number}option.time2 时间2
 * @param {string}option.name 名字
 * @param {string}[name] 名字2
 * @returns {object} obj 一个对象一个对象一个对象一个对象
 * @returns {string} obj.name namenmae
 * @name sleep
 */
export function sleep(option: {
    time: number,
    time2: number,
    name?: string
}): Promise<void>

export function sleep2(time: number): Promise<void>
