const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const git = simpleGit();
const dayjs = require('dayjs');

(async ()=>{
    // 变量
    console.log(__dirname, '__dirname');
    console.log(path.join(__dirname, '../'));
    const npmDir = path.join(__dirname, '../../utilshub-npm');
    const serverdbDir = path.join(__dirname, '../../utilshub-serverdb');
    
    // 获取最新一次提交的文件列表
    const logs = await git.log(['--oneline', '-1']);
    const lastLogId = logs.all[0].hash.split(' ')[0];
    console.log('# commitId', lastLogId);
    const commitContent = await git.show([lastLogId, '--name-status', ]);
    let updatedFiles = commitContent.match(/[DAM]\s+([^\s]*)/g);
    updatedFiles = (updatedFiles || []).map(i => {
        const arr = i.split(/\t/);
        return {
            type: arr[0],
            file: arr[1],
        }
    });
    updatedFiles = updatedFiles.filter(i => /^utils\/.*/.test(i.file));
    console.log('# 更新列表', updatedFiles);

    // 将有跟新的文件拷贝到lib库
    for(let i = 0; i<updatedFiles.length; i++) {
        if(!['M','A'].includes(updatedFiles[i].type)) continue;
        const dirName = updatedFiles[i].file;
        const pp = path.join(__dirname, '../', dirName);
        // 解析文件内容
        const fileContent = fs.readFileSync(pp, 'utf-8');
        // 解析文件
        const match = fileContent.match(/\/\*([\s\S]*)\*\/([\s\S]*)/);
        const fields = match[1].split(/[(\r\n)\r\n]+/).filter(i => i.trim()).map(i => {
            const m = i.match(/@([^:]*):\s*(.*)/);
            return {
                key: m[1].trim(),
                value: m[2].trim(),
            }
        });
        const funName = dirName.split('/')[1];
        const content = match[2].trim();
        const info = JSON.stringify(fields);
        const newFileContent = formatExportFun(info, funName, content);
        const nowDate = dayjs().format('YYYYMMDD');
        fs.writeFileSync(path.join(npmDir, `${funName}-${nowDate}.js`), newFileContent);
        fs.writeFileSync(path.join(serverdbDir, `${funName}-${nowDate}.js`), newFileContent);
    }
})();


function formatExportFun(info, exportFunName, funText){
    const str = `/*infostart${info}infoend*/
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
/*funstart*/
${funText}
/*funend*/
var _default = ${exportFunName};
exports.default = _default;`;
    return str;
}
