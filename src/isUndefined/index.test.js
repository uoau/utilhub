import { isUndefined } from './index.js';

test('Test isUndefined', async () => {
    //demostart
    console.log('Undefined', isUndefined(undefined);
    console.log('Undefined', isUndefined({}.name);
    console.log('Null', isUndefined(null);
    console.log('False', isUndefined(false));
    console.log('String', isUndefined(''));
    //demoend
    expect(isUndefined(undefined)).toBe(true);
});
