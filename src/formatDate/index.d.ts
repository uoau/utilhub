/**
 * 将日期格式化为如  2021-03-16 的字符串
 * @param {any} date Date / 毫秒时间戳 / '2021-03-16'
 * @param {string} format y[年] M[月] d[日] h[时] m[分] s[秒] S[毫秒] q[季度]
 * @returns {string} result 格式化的日期字符串
 * @name formatDate
 */
export function formatDate(date: any, format: string): string
