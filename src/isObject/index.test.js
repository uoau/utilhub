import { isObject } from './index.js';

test('Test isObject', async () => {
    //demostart
    console.log('Object', isObject({}));
    console.log('Object', isObject(new Object()));
    console.log('Array', isObject([]));
    console.log('Map', isObject(new Map()));
    console.log('HtmlElement', isObject(new HTMLElement()));
    console.log('Date', isObject(new Date()));
    //demoend
    expect(isObject({})).toBe(true);
});
