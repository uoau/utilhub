const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '../package.json');
let pkg = fs.readFileSync(pkgPath);
pkg = JSON.parse(pkg);
const originVersion = pkg.version.split('.').map(i => +i);
originVersion[2] += 1;
pkg.version = originVersion.join('.');
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

