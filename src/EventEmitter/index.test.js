import { EventEmitter } from './index.js';

test('Test EventEmitter', async () => {
    //demostart
    // 以一个下载图片函数为例
    function download(url){
        const ee = new EventEmitter();
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onprogress = (e) => {
            ee.emit('progress', e.loaded / e.total);
        }
        xhr.onload = (e) => {
            ee.emit('end');
        }
        xhr.send();
        return ee;
    }
    const downloadEe = download('//h2.ioliu.cn/bing/Pilat_ZH-CN0091553547_1920x1080.jpg');
    downloadEe.on('progress', (data) => {
        console.log('# 下载进度', data);
    })
    downloadEe.on('end', () => {
        console.log('# 下载完成');
    })
    //demoend
    expect(true).toBe(true);
});
