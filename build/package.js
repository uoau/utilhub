const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const git = simpleGit();
const dayjs = require('dayjs');
const babel = require("@babel/core");
const babelConfig = require('../babel.config.json');
const uglifyJs = require("uglify-js");

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
        // 获取文件更新内容
        const updateContent = await git.show([lastLogId, pp]);
        const changeContent = updateContent.match(/@@[^@]*@@([\s\S]*)$/)[1];
        const changeLines = changeContent.split(/[\r\n]/).filter(i => {
            return /^[-+]+[^\r\n]*$/.test(i);
        });
        let funHasChange = false;
        for(let i =0; i< changeLines.length; i++) {
            const line = changeLines[i].trim();
            let isUnuseLine = false;
            if(/\*\s*@[^:]*:/.test(line)){
                // 属性行
                isUnuseLine = true;
            }
            if(/^[-+]+\s*$/.test(line)){
                // 空行
                isUnuseLine = true;
            }
            if(/^[-+]+\s*\*\//.test(line) || /^[-+]+\s*\/\*/.test(line) || /^[-+]+\s*\*/.test(line)){
                // 注释头尾 /* */ *
                isUnuseLine = true;
            }
            if(!isUnuseLine) {
                funHasChange = true;
                break;
            }
        }
        console.log('函数内容发送改变', funHasChange);
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

        let nowDate = dayjs().format('YYYYMMDD');
        const funName = dirName.split('/')[1];
        const npmAllFilesNames = fs.readdirSync(npmDir);
        if(!funHasChange) {
            // 函数内容没有发生改变，直接覆盖在最后一次的文件上
            const files = npmAllFilesNames
                .filter(i => new RegExp(`${funName}-[0-9]+`).test(i))
                .map(i=> {
                    const date = i.match(/-([0-9]+)\.js/)[1];
                    const value = dayjs(date).valueOf();
                    return {
                        filename: i,
                        date,
                        value,
                    }
                })
                .sort((a, b) => {
                    return b.value - a.value
                });
            nowDate = files[0].date;
        }
        const content = match[2].trim();
        const info = JSON.stringify(fields);
        const newFileContent = formatExportFun(info, funName, content);
        if(funHasChange) {
            let code = (await babel.transformSync(`${content};export default ${funName};`, babelConfig)).code; 
            code = uglifyJs.minify(code).code;
            fs.writeFileSync(path.join(npmDir, `${funName}-${nowDate}.js`), code);
        }
        fs.writeFileSync(path.join(serverdbDir, `${funName}-${nowDate}.js`), newFileContent);
    }
})();


function formatExportFun(info, exportFunName, funText){
    const str = `${info ? '/*infostart' + info + 'infoend*/' : ''}
/*funstart*/
${funText}
/*funend*/`;
    return str;
}
