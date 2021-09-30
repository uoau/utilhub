function timeAgoLabel(times) {
    const nowTimes = new Date().getTime();
    const diffSecond = (nowTimes - times) / 1000;
    let agoLabel = '';
    if (diffSecond < 60) {
        agoLabel = '刚刚';
    } else if (diffSecond < 60 * 60) {
        agoLabel = `${Math.floor(diffSecond / 60)}分钟前`;
    } else if (diffSecond < 60 * 60 * 24) {
        agoLabel = `${Math.floor(diffSecond / 3600)}小时前`;
    } else if (diffSecond < 60 * 60 * 24 * 30) {
        agoLabel = `${Math.floor(diffSecond / (3600 * 24))}天前`;
    } else if (diffSecond < 3600 * 24 * 30 * 12) {
        agoLabel = `${Math.floor(diffSecond / (3600 * 24 * 30))}月前`;
    } else {
        agoLabel = `${Math.floor(diffSecond / (3600 * 24 * 30 * 12))}年前`;
    }
    return agoLabel;
}

export {
    timeAgoLabel,
};
