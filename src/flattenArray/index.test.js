import { flattenArray } from './index.js';

test('Test flattenArray', async () => {
    //demostart
    const arr = flattenArray([1,[2,[3,[4,[5]]]]]);
    console.log(arr);
    //demoend
    expect(arr).toEqual([1,2,[3,[4,[5]]]);
});
