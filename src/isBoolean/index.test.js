import { isBoolean } from './index.js';

test('Test isBoolean', async () => {
    //demostart
    console.log('True', isBoolean(true));
    console.log('False', isBoolean(false));
    console.log('Null', isBoolean(null));
    console.log('Object', isBoolean({}));
    //demoend
    expect(isBoolean(true)).toBe(true);
});
