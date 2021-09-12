function shuffleArray(arr) {
    const arrLen = arr == null ? 0 : arr.length;
    if (!arrLen) {
        return [];
    }
    let index = 0;
    const lastIndex = arrLen - 1;
    const result = arr.map((i) => i);
    while (index < arrLen) {
        const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
        const value = result[rand];
        result[rand] = result[index];
        result[index] = value;
        index += 1;
    }
    return result;
}

export {
    shuffleArray,
};
