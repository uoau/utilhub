import { sleep } from './index.js';

test('sleep 1000ms', async () => {
    const timeStart = new Date().getTime();
    await sleep(1000);
    const timeEnd = new Date().getTime();
    expect(timeEnd - timeStart > 1000).toBe(true);
});
