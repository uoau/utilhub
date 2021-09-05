const fs = require('fs');
const path = require('path');

const dayjs = require('dayjs');
const babel = require('@babel/core');
const uglifyJs = require('uglify-js');
const babelConfig = require('../babel.config.json');

(async () => {
    // 地址
    const npmDir = path.join(__dirname, '../../utilshub-npm');
    const masterDir = path.join(__dirname, '../../utilshub');

    // 打包处理utils函数
    const utilsDir = path.join(__dirname, '../utils');
    const folders = fs.readdirSync(utilsDir);
    for(let i = 0; i< folders.length; i++) {
        const folder = folders[i];
        const funName = folder;
        // 文件内容
        const indexjs = fs.readFileSync(path.join(utilsDir, folder, 'index.js'), 'utf-8');
        // const indexjson = fs.readFileSync(path.join(utilsDir, folder, 'index.json'), 'utf-8');
        const indexDts = fs.readFileSync(path.join(utilsDir, folder, 'index.d.ts'), 'utf-8');
        const { code } = await babel.transformSync(indexjs, babelConfig);
        const babelIndexJs = uglifyJs.minify(code).code;

        // 放进npm分支
        const utilshubPackage = eval(fs.readFileSync(path.join(masterDir, 'package.json'), 'utf-8'));
        const utilshubNpmPackage = eval(fs.readFileSync(path.join(npmDir, 'package.json'), 'utf-8'));
        utilshubNpmPackage.version = utilshubPackage.version;
        fs.writeFileSync(path.join(npmDir, 'package.json'), JSON.stringify(utilshubNpmPackage, null, 2));
        fs.writeFileSync(path.join(npmDir, `${funName}.js`), babelIndexJs);
        fs.writeFileSync(path.join(npmDir, `${funName}.d.ts`), indexDts);
    }
})();