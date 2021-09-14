import { shuffleArray } from './index.js';

test('Test shuffleArray', async () => {
    //demostart
    const oldArr = [1,2,3,4,5,6,7,8,9,10];
    const newArr = shuffleArray(oldArr);
    console.log(newArr);
    //demoend
    expect(true).toBe(true);
});
