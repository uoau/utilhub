import { formatDate } from './index.js';

test('Test formatDate', async () => {
    //demostart
    const dateStr1 = formatDate(1631458069548, 'yyyy-MM-dd hh:mm:ss');
    const dateStr2 = formatDate(1631458069548, 'hh:mm:ss yyyy~MM~dd');
    console.log(dateStr1, dateStr2);
    //demoend
    expect(dateStr).toBe('2021-09-12 22:47:49');
});
