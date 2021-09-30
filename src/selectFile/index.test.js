import { selectFile } from './index.js';

test('Test selectFile', async () => {
    //demostart
    const files = await selectFile({
        accept: 'image/*',
        multiple: true,
    });
    console.log(files);
    //demoend
});
