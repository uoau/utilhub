import { isDate } from './index.js';

test('Test isDate', async () => {
    //demostart
    console.log('Date', isDate(new Date()));
    console.log('String', isDate('2021-03-16'));
    //demoend
    expect(isDate(new Date())).toBe(true);
});
