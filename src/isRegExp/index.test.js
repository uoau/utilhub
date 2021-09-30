import { isRegExp } from './index.js';

test('Test isRegExp', async () => {
    //demostart
    console.log('RegExp', isRegExp(/.*/));
    console.log('RegExp', isRegExp(new RegExp()));
    console.log('String', isRegExp('string'));
    //demoend
    expect(isRegExp(/.*/)).toBe(true);
});
