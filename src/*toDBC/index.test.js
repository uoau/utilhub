import { toDBC } from './index.js';

test('Test toDBC', async () => {
    //demostart
    const result = toDBC('123abc,.!');
    console.log(result);
    //demoend
    expect(timeEnd - timeStart > 1000).toBe(true);
});
