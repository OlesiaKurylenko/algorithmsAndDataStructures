const {
    performance
} = require('perf_hooks');

const calculatePerfomance = (functionToCall, countItems) => {
    let count = 0;
    const start = performance.now();

    while (countItems > count++) {
        functionToCall(count);
    }
    const end = performance.now();
    return end - start;
}

const calculateInsertPerfomance = (functionToCall, array) => {
    let count = 0;
    const start = performance.now();

    array.forEach(element => {
        functionToCall(element);
    });

    const end = performance.now();
    return end - start;
}
const calculateFindPerfomance = (functionToCall, value) => {
    let count = 0;
    const start = performance.now();
    functionToCall(value);

    const end = performance.now();
    return end - start;
}
const calculateSortPerfomance = (functionToCall, value) => {
    let count = 0;
    const start = performance.now();
    functionToCall(value);

    const end = performance.now();
    return end - start;
}
module.exports = { calculatePerfomance, calculateInsertPerfomance, calculateFindPerfomance, calculateSortPerfomance };