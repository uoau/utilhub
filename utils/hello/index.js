/*
 * @version:  1
 * @title:    load image
 * @title-zh: 加载图片
 * @desc:     this is description
 * @desc-zh:  描述描述
 * @tags:     img|file
 * @category: file
 * @usage:    这是用法
 * @ssss:     你好啊啊啊啊啊
 */

function hello(url) {
    console.log('我是天才啊123');
    const a = {};
    const b = a?.name;
    console.log(b);

    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject();
        };
    });
}

export default hello;
