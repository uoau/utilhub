function toDBC(str) {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        const code = str.charCodeAt(i);
        if (code >= 33 && code <= 126) {
            result += String.fromCharCode(str.charCodeAt(i) + 65248);
        } else if (code === 32) {
            result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

export {
    toDBC,
};
