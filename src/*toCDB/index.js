const CDBMap = '';
// 0-9 a-z A-Z !"'！：:@
function toCDB(str) {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        const code = str.charCodeAt(i);
        if (code >= 65281 && code <= 65374) {
            result += String.fromCharCode(str.charCodeAt(i) - 65248);
        } else if (code === 12288) {
            result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

export {
    toCDB,
};
