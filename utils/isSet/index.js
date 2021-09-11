const nodeIsSet = globalThis.nodeTypes && globalThis.nodeTypes.isSet;
function isSet(value) {
    if (nodeIsSet) {
        return nodeIsSet(value);
    }
    if (typeof value === 'object'
        && value !== null
        && Object.prototype.toString.call(value) === '[object Set]') return true;
    return false;
}

export {
    isSet,
};
