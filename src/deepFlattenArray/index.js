import { isArray } from '../isArray';

function deepFlattenArray(arr, depth, options, result) {
    const resultArr = result || [];
    for (const value of arr) {
        if (depth > 0 && isArray(value)) {
            if (depth > 1) {
                deepFlattenArray(value, depth - 1, options, resultArr);
            } else {
                resultArr.push(...value);
            }
        }
    }
    return resultArr;
}

export {
    deepFlattenArray,
};
