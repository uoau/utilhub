import { Concurrence } from './index.js';

test('Test Concurrence', async () => {
    //demostart
    function sleep(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }
    const cc = new Concurrence(5);
    let arr = [];
    for(let i = 0; i< 20; i++) {
        cc.addTask(async () => {
            await sleep(2000);
            arr.push(i);
            if((i + 1) % 5 === 0) {
                console.log(arr);
                arr = [];
            }
        })
    }
    //demoend
});
