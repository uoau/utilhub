import { urlToImage } from './index.js';

test('Test urlToImage', async () => {
    //demostart
    const image = await urlToImage('https://')
    //demoend
    expect(image instanceof Image).toBe(true);
});
