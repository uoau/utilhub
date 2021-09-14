import { isBoolean } from './index.js';

test('sayHi1', async () => {
    //demostart
    const value1 = true;
    const value2 = false;
    const value3 = new Boolean(false);
    const value4 = 'false';
    const value5 = undefined;
    const is1 = isBoolean(value1);
    const is2 = isBoolean(value2);
    const is3 = isBoolean(value3);
    const is4 = isBoolean(value4);
    const is5 = isBoolean(value5);
    console.log(`Value1 ${ is1 ? 'is' : "isn't" } boolean.`);
    console.log(`Value2 ${ is2 ? 'is' : "isn't" } boolean.`);
    console.log(`Value3 ${ is3 ? 'is' : "isn't" } boolean.`);
    console.log(`Value4 ${ is4 ? 'is' : "isn't" } boolean.`);
    console.log(`Value5 ${ is5 ? 'is' : "isn't" } boolean.`);
    //demoend
    expect(true).toBe(true);
});
