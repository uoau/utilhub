import { isSet } from './index.js';

test('Test isSet', async () => {
    //demostart
    console.log('Set', isSet(new Set()));
    console.log('Array', isSet(new Array()));
    console.log('Map', isSet(new Map()));
    //demoend
    expect(isSet(new Set())).toBe(true);
});
