import { Broadcast } from './index.js';

test('Test Broadcast', async () => {
    //demostart
    // 页面1
    const broadcast1 = new Broadcast('xux');
    broadcast1.on('sayhi', (name) => {
        console.log('hello' + name);
    });
    broadcast1.on('sayhi', (name) => {
        console.log('hi' + name);
    });

    // 页面2
    const broadcast2 = new Broadcast('xux');
    broadcast2.emit('sayhi', 'xux');
    //demoend
    expect(newArr.length).toBe(4);
});
