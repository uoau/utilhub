import { isString } from './index.js';

test('Test isString', async () => {
    //demostart
    const values = [
        'utilhub',
        new String('utilhub'),
        {},
        null,
    ];
    values.forEach(value => {
        const is = isString(value);
        console.log(value, is);
    });
    //demoend
    const expectResult = [true, true, false, false];
    const testResult = [];
    values.forEach(value => {
        const is = isString(value);
        testResult.push(is);
    });
    expect(expectResult.toString()).toBe(testResult.toString());
});
