import { deepFlattenArray } from './index.js';

test('Test deepFlattenArray', async () => {
    //demostart
    const originArr = [1,[2,[3,[4,[5]]]]];
    const arr1 = deepFlattenArray(originArr);
    const arr2 = deepFlattenArray(originArr, 1);
    const arr3 = deepFlattenArray(originArr, 3);
    console.log('arr1', arr1);
    console.log('arr2', arr2);
    console.log('arr3', arr3);
    //demoend
    expect(arr1).toEqual([1,2,3,4,5]);
    expect(arr2).toEqual([1,2,[3,[4,[5]]]]);
});
