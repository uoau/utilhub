const nodeIsRegExp = globalThis.nodeTypes && globalThis.nodeTypes.isRegExp;
function isRegExp(value) {
    if (nodeIsRegExp) {
        return nodeIsRegExp(value);
    }
    if (typeof value === 'object'
        && value !== null
        && Object.prototype.toString.call(value) === '[object RegExp]') return true;
    return false;
}

export {
    isRegExp,
};
