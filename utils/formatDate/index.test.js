import { formatDate } from './index.js';

test('Test formatDate', async () => {
    //demostart
    const dateStr = formatDate(1631458069548, 'yyyy-MM-dd hh:mm:ss');
    console.log(dateStr);
    //demoend
    expect(dateStr).toBe('2021-09-12 22:47:49');
});
