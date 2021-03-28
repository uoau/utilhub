import { loadImg } from 'utils-hub';

// 文件名结构
loadImg
 |__ index.js
 |__ index.ts

// 文件内容
// title: load url to img obj
// title-zh: 加载url生成img对象
// description: english description
// description-zh: 中文描述
// keywords: img\
// account: XuX
// arguments: 
// {String} url : 图片地址
// arguments-zh:
// returns:
// {Image} img : 一个全新的对象
// returns-zh:

function loadImg(url){
    return new Promise((resolve,reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img);
        }
    })
}

// test:input
loadImg('http://123')

// test:output
<img>



import { loadImg } from 'utils-hub/loadImg';

222
