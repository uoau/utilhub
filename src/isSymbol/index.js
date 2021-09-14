function isSymbol(value) {
    const type = typeof value;
    if (type === 'symbol') return true;
    if (typeof value === 'object'
        && value !== null
        && Object.prototype.toString.call(value) === '[object Symbol]') return true;
    return false;
}

export {
    isSymbol,
};
