/**
 * 获取匹配到的多个兄弟元素
 * @param {HTMLElement} elem dom 对象
 * @param {string} [selector] 所要匹配的兄弟元素选择器
 * @returns {array} elems 返回获取到的兄弟元素数组
 * @name getElemSiblings
 */
export function getElemSiblings(elem: HTMLElement, selector?: string): HTMLElement[]
