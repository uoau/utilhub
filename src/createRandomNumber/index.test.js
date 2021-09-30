import { createRandomNumber } from './index.js';

test('Test createRandomNumber', async () => {
    //demostart
    const random = createRandomNumber(1,10); // [1,10]
    console.log(random);
    //demoend
    for(let i = 0; i < 20; i++) {
        const random = createRandomNumber(1,10);
        expect(random >= 1 && random <= 10).toBe(true);
    }
});
