import { isArray } from './index.js';

test('Test isArray', async () => {
    //demostart
    console.log('Array', isArray([]));
    console.log('Boolean', isArray(true));
    console.log('Map', isArray(new Map()));
    console.log('Object', isArray({}));
    //demoend
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
});
