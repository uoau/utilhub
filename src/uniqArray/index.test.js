import { uniqArray } from './index.js';

test('Test uniqArray', async () => {
    //demostart
    let a = [];
    const oldArr = [1, 1, '1', 2, null, null, undefined, {}, {}, a, a];
    const newArr = uniqArray(oldArr);
    console.log(newArr);
    //demoend
    expect(newArr[7]).toBe(a);
});
