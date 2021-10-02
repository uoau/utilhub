/**
 * @name 数组分块
 * @param {array} arr 要处理的数组
 * @param {number} size 每一块的长度
 * @returns {array} 返回分块后的数组
 */
function chunkArray(arr, size = 1) {
    let index = 0;
    let resIndex = 0;
    const arrLen = arr.length;
    const result = new Array(Math.ceil(arrLen / size));
    while (index < arrLen) {
        result[resIndex] = arr.slice(index, index + size);
        index += size;
        resIndex += 1;
    }
    return result;
}

export {
    chunkArray,
};
