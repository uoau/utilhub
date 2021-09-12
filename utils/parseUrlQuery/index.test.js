import { parseUrlQuery } from './index.js';

test('Test parseUrlQuery', async () => {
    //demostart
    const urlQuery = parseUrlQuery('https://www.utilhub.com?q=sth&page=12');
    console.log(urlQuery);
    //demoend
    expect(urlQuery.q).toBe('sth');
    expect(urlQuery.page).toBe('12');
});
