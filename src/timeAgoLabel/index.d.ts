/**
 * 将日期格式化成 刚刚/N分钟前/N小时前...
 * @param {any} time Date / 毫秒时间戳 / '2021-03-16'
 * @returns {string} result 生成的字符串
 * @name timeAgoLabel
 */
export function timeAgoLabel(time: number): string
