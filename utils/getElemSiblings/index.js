function getElemSiblings(elem, selector) {
    const parentElem = elem.parentNode;
    if (!parentElem) return [];
    let selectorMatched = [];
    if (selector) {
        selectorMatched = [...parentElem.querySelectorAll(selector)]
            .filter((i) => i.parentNode === parentElem);
    }
    if (selector && !selectorMatched.length) return [];
    let nextElem = parentElem.firstChild;
    const matched = [];
    for (; nextElem; nextElem = nextElem.nextSibling) {
        if (nextElem.nodeType === 1 && nextElem !== elem) {
            let isMatch = true;
            if (selector && !selectorMatched.includes(nextElem)) isMatch = false;
            if (isMatch) matched.push(nextElem);
        }
    }
    return matched;
}

export {
    getElemSiblings,
};
