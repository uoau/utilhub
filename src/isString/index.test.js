import { isString } from './index.js';

test('Test isString', async () => {
    //demostart
    console.log('String', isString('Hello world!'));
    console.log('String', isString(new String('Hello world!')));
    console.log('Number', isString(123));
    //demoend
    expect(isString('Hello world!')).toBe(true);
});
