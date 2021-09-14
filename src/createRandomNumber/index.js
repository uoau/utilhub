function createRandomNumber(rule = '[0,10]', floatSize) {
    const ruleMatch = rule.match(/([([])([0-9]+),([0-9]+)([)\]])/);
    const start = +ruleMatch[2];
    const startOpen = ruleMatch[1] === '(';
    const end = +ruleMatch[3];
    const endOpen = ruleMatch[4] === ')';
    let intResult = start + Math.floor(Math.random() * (end - start + 1)); // 整数 [1,2] [1+, 3)
    let result = intResult;
    if (floatSize) {
        const rand = Math.random();
        const floatResult = rand.toString().slice(0, 2 + floatSize).slice(1, Infinity);
        result = intResult.toString() + floatResult;
        if (result > end) {
            intResult -= 1;
            result = intResult.toString() + floatResult;
        }
        result = parseFloat(result);
    }
    let retry = false;
    if (startOpen && endOpen && (result === start || result === end)) { // (1,2)
        retry = true;
    } if (startOpen && !endOpen && (result === start)) { // (1,2]
        retry = true;
    } if (!startOpen && endOpen && (result === end)) { // [1,2)
        retry = true;
    }
    if (retry) {
        return createRandomNumber(rule, floatSize);
    }
    return result;
}

export {
    createRandomNumber,
};
