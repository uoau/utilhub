import { getElemSiblings } from '../getElemSiblings';

function getElemSibling(elem, selector) {
    return getElemSiblings(elem, selector)[0];
}

export {
    getElemSibling,
};
