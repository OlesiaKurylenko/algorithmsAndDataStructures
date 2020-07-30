const calculatePerfomance = (functionToCall, countItems) => {
    let count = 0;
    const start = performance.now();

    while (countItems > count++) {
        functionToCall(count);
    }
    const end = performance.now();
    return end - start;
}

module.exports = calculatePerfomance;