import { deepFlattenArray } from '../deepFlattenArray/index';

function flattenArray(arr) {
    return deepFlattenArray(arr, 1);
}

export {
    flattenArray,
};
