import { isObject } from './index.js';

test('Test isObject', async () => {
    //demostart
    console.log('Object', isNumber({}));
    console.log('Object', isNumber(new Object()));
    console.log('Array', isNumber([]));
    console.log('Map', isNumber(new Map()));
    console.log('HtmlElement', isNumber(new HTMLElement()));
    console.log('Date', isNumber(new Date()));
    //demoend
    expect(isObject({})).toBe(true);
});
