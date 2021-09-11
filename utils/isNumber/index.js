function isNumber(value) {
    if (typeof value === 'number') return true;
    if (typeof value === 'object'
        && value !== null
        && Object.prototype.toString.call(value) === '[object Number]') return true;
    return false;
}

export {
    isNumber,
};
