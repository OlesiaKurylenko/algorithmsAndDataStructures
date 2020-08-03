
let compareResult = (result1, result2) => {
    let resultTemp = result1.executeTime < result2.executeTime ? { ...result2 } : { ...result1 };
    if (result1.executeTime < result2.executeTime) {
        result2 = result1;
        result1 = resultTemp;
    }
    let addSpace = (str, count, before) => {
        return before ? ' '.repeat(count - str.length) + str : str + ' '.repeat(count - str.length);
    }
    return `COMPARE ${(result1.objectName ? result1.objectName + '.' + result1.funcName : result1.funcName)} AND ${(result2.objectName ? result2.objectName + '.' + result2.funcName : result2.funcName)}:\n
    ${addSpace((result1.objectName ? result1.objectName + '.' + result1.funcName : result1.funcName) + '( ' + result1.countRows + ' )', 40, true)} time: ${addSpace(result1.executeTime, 20)},
    ${addSpace((result2.objectName ? result2.objectName + '.' + result2.funcName : result2.funcName) + '( ' + result2.countRows + ' )', 40, true)} time: ${addSpace(result2.executeTime, 20)}, 
    ${(result1.objectName ? result1.objectName + '.' + result1.funcName : result1.funcName) + '( ' + result1.countRows + ' )'} SLOWER THAN ${(result2.objectName ? result2.objectName + '.' + result2.funcName : result2.funcName) + '( ' + result2.countRows + ' )'} ON ${Math.round((result1.executeTime - result2.executeTime) * 1000000) / 1000000}  OR IN ${Math.round((result1.executeTime / result2.executeTime) * 10) / 10}
    \n${'-'.repeat(90)}\n`
}
module.exports = compareResult;