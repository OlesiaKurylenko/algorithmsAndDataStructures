module.exports = class Result {
    constructor(objectName, funcName, executeTime, countRows) {
        this.objectName = objectName;
        this.funcName = funcName;
        this.executeTime = Math.round(executeTime * 1000000) / 1000000;
        this.countRows = countRows;
    }
    addSpace(str, count, before) {
        return before ? ' '.repeat(count - str.length) + str : str + ' '.repeat(count - str.length);
    }
    getInfoText() {
        return `${this.addSpace(this.objectName ? this.objectName + '.' + this.funcName + '(' + this.countRows + ')' : this.funcName + '(' + this.countRows + ')', 42, true)} time: ${this.executeTime}`;
    }
}