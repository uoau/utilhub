import { chunkArray } from './index.js';

test('Test chunkArray', async () => {
    //demostart
    const oldArr = [1,2,3,4,5,6,7,8,9,10];
    const newArr = chunkArray(oldArr, 3);
    console.log(newArr);
    //demoend
    expect(newArr.length).toBe(4);
});
