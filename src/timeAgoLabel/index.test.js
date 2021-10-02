import { timeAgoLabel } from './index.js';

test('Test timeAgoLabel', async () => {
    //demostart
    const time = new Date().getTime();
    await sleep(1000);
    const agoLabel = timeAgoLabel(time);
    console.log(agoLabel);
    //demoend
    expect(agoLabel).toBe('刚刚');
});
