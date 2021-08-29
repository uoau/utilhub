/*infostart[{"key":"loadImg","value":""},{"key":"title","value":"load image"},{"key":"title-zh","value":"加载图片"},{"key":"desc","value":"this is description"},{"key":"desc-zh","value":"描述描述"},{"key":"tags","value":"img\\file"},{"key":"usage","value":"这是用法"}]infoend*/
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
/*funstart*/
function hello(url){
    console.log(2);
    return new Promise((resolve,reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img);
        }
        img.onerror = () => {
            reject();
        }
    })
}
/*funend*/
var _default = hello;
exports.default = _default;