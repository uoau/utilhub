const fs = require('fs');
const path = require('path');

const dayjs = require('dayjs');
const babel = require('@babel/core');
const uglifyJs = require('uglify-js');
const babelConfig = require('../babel.config.json');

(async () => {
    // 地址
    const npmDir = path.join(__dirname, '../../utilhub-npm');
    const masterDir = path.join(__dirname, '../../utilhub');

    // 打包处理utils函数
    const utilsDir = path.join(__dirname, '../src');
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
        const utilhubPackage = require(path.join(masterDir, 'package.json'));
        const utilhubNpmPackage = require(path.join(npmDir, 'package.json'));
        utilhubNpmPackage.version = utilhubPackage.version;
        fs.writeFileSync(path.join(npmDir, 'package.json'), JSON.stringify(utilhubNpmPackage, null, 2));
        fs.writeFileSync(path.join(npmDir, `${funName}.js`), babelIndexJs);
        fs.writeFileSync(path.join(npmDir, `${funName}.d.ts`), indexDts);
    }
})();