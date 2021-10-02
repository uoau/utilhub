import { urlToImage } from './index.js';

test('Test urlToImage', async () => {
    //demostart
    const image = await urlToImage('//h2.ioliu.cn/bing/Pilat_ZH-CN0091553547_1920x1080.jpg');
    console.log(image);
    //demoend
    expect(image instanceof Image).toBe(true);
});
