const nodeIsDate = globalThis.nodeTypes && globalThis.nodeTypes.isDate;
function isDate(value) {
    if (nodeIsDate) {
        return nodeIsDate(value);
    }
    if (typeof value === 'object'
        && value !== null
        && Object.prototype.toString.call(value) === '[object Date]') return true;
    return false;
}

export {
    isDate,
};
