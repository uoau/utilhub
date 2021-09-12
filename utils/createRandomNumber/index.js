// 未完成
function createRandomNumber(rule = '[0,10]') {
    const ruleMatch = rule.match(/([([])([0-9]+),([0-9]+)([)\]])/);
    const start = +ruleMatch[2];
    const startOpen = ruleMatch[1] === '(';
    const end = +ruleMatch[3];
    const endOpen = ruleMatch[4] === ')';
    if (startOpen && endOpen) { // (1,2)

    } else if (!startOpen && !endOpen) { // [1,2]

    } else { // (1,2]

    }
    const randomNum = Math.random() * (end - start) + start;

    return randomNum;
}

export {
    createRandomNumber,
};
