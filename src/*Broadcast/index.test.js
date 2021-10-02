import { Broadcast } from './index.js';

test('Test Broadcast', async () => {
    //demostart
    const broadcast1 = new Broadcast('xux');
    broadcast1.on('sayhi', (name) => {
        console.log('hello' + name);
    });
    broadcast1.on('sayhi', (name) => {
        console.log('hi' + name);
    });

    // 子页面
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    const childWin = iframe.contentWindow;
    childWin.Broadcast = Broadcast;
    childWin.eval(`
        const broadcast2 = new Broadcast('xux');
        broadcast2.emit('sayhi', 'xux');
    `);
    //demoend
    expect(newArr.length).toBe(4);
});
