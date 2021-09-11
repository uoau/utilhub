import { isString } from './index.js';

test('sayHi', async () => {
    //demostart
    const value1 = 'utilhub';
    const value2 = new String('utilhub');
    const value3 = {};
    const is1 = isString(value1);
    const is2 = isString(value2);
    const is3 = isString(value3);
    console.log(`value1 ${ is1 ? 'is' : "isn't" } string`);
    console.log(`value2 ${ is2 ? 'is' : "isn't" } string`);
    console.log(`value3 ${ is3 ? 'is' : "isn't" } string`);
    //demoend
    expect(true).toBe(true);
});
