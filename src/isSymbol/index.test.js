import { isSymbol } from './index.js';

test('Test isSymbol', async () => {
    //demostart
    console.log('Symbol', isSymbol(new Symbol(true));
    console.log('String', isSymbol('Hello world!'));
    console.log('Number', isSymbol(123));
    //demoend
    expect(isSymbol(new Symbol(true))).toBe(true);
});
