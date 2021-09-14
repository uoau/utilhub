import { deepFlattenArray } from '../deepFlattenArray/index';

function flattenArray(arr) {
    deepFlattenArray(arr, 1);
}

export {
    flattenArray,
};
