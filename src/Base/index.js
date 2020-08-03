let { calculateSearchPerfomance, calculateInsertPerfomance, calculateFindPerfomance, calculateSortPerfomance, calculateInsertObjectPerfomance } = require('./calculatePerfomance');
let campareResult = require('./campareResult.function');
let generateRandomArray = require('./generateRandomArray.function');
let { processeLinkiedListAndArray } = require('./processe.function');
let Result = require('./result.class');

module.exports = {
    calculateSearchPerfomance,
    calculateInsertPerfomance,
    calculateFindPerfomance,
    calculateSortPerfomance,
    calculateInsertObjectPerfomance,
    campareResult,
    generateRandomArray,
    processeLinkiedListAndArray,
    Result
}