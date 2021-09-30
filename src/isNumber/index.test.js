import { isNumber } from './index.js';

test('Test isNumber', async () => {
    //demostart
    console.log('10', isNumber(10));
    console.log('10', isNumber(new Number(10)));
    console.log('10.10', isNumber(10.10));
    console.log('NaN', isNumber(NaN));
    console.log('Infinity', isNumber(Infinity));
    console.log('String', isNumber('10'));
    //demoend
    expect(isNumber(100)).toBe(true);
});
