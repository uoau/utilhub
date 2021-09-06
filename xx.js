const { parse } = require('comment-parser');
const fs = require('fs');

function getQrDocs(dTsFileContent) {
    const parsed = parse(dTsFileContent);
    const qrDocs = [];
    parsed.forEach((block) => {
        let funName;
        const query = {};
        const returnContent = {};
        block.tags.forEach((tagItem) => {
            const { tag } = tagItem;
            if (tag === 'name') {
                funName = tagItem.name;
            } else if (tag === 'param' || tag === 'returns') {
                const {
                    optional, type, name, description, default: defaultValue,
                } = tagItem;
                const obj = {
                    param: name,
                    required: !optional,
                    type,
                    note: description,
                    defaultValue,
                    children: {},
                };
                const use = tag === 'param' ? query : returnContent;
                if (tagItem.name.includes('.')) {
                    const nameArr = tagItem.name.split('.'); // option.obj.name
                    let q = use;
                    for (let i = 0; i < nameArr.length; i += 1) {
                        const pname = nameArr[i];
                        if (i === nameArr.length - 1) {
                            q[pname] = obj;
                            obj.param = pname;
                        } else {
                            q = q[pname].children;
                        }
                    }
                } else {
                    use[name] = obj;
                }
            }
        });
        qrDocs.push({
            funName,
            query,
            returnContent,
        });
    });
    return qrDocs;
}

const zhushi = fs.readFileSync('./utils/sleep/index.d.ts', 'utf-8');
const res = getQrDocs(zhushi);
console.log(JSON.stringify(res, null, 4));
