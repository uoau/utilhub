function isBoolean(value) {
    if (value === true || value === false) return true;
    if (typeof value === 'object'
        && value !== null
        && Object.prototype.toString.call(value) === '[object Boolean]') return true;
    return false;
}

export {
    isBoolean,
};
