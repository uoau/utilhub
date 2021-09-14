function isString(value) {
    const type = typeof value;
    if (type === 'string') return true;
    if (type === 'object'
        && value != null
        && !Array.isArray(value)
        && Object.prototype.toString.call(value) === '[object String]') return true;
    return false;
}

export {
    isString,
};
