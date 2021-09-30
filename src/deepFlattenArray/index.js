import { isArray } from '../isArray';

function deepFlattenArray(arr, depth = 1 / 0, result) {
    const resultArr = result || [];
    for (let i = 0; i < arr.length; i += 1) {
        const value = arr[i];
        if (depth > 0 && isArray(value)) {
            if (depth > 1) {
                deepFlattenArray(value, depth - 1, resultArr);
            } else {
                resultArr.push(...value);
            }
        } else {
            resultArr.push(value);
        }
    }
    return resultArr;
}

export {
    deepFlattenArray,
};
