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
