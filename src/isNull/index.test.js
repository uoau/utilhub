import { isNull } from './index.js';

test('Test isNull', async () => {
    //demostart
    console.log('Null', isNull(null));
    console.log('Undefined', isNull(undefined));
    console.log('False', isNull(false));
    //demoend
    expect(isNull(null)).toBe(true);
});
