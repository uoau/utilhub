import { sleep } from './index.js';

test('sleep 1000ms', async () => {
    //demostart
    const timeStart = new Date().getTime();
    await sleep(1000);
    const timeEnd = new Date().getTime();
    console.log(timeEnd - timeStart);
    //demoend
    expect(timeEnd - timeStart > 1000).toBe(true);
});
