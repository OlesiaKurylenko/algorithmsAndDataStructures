let {
    calculateSearchPerfomance,
    calculateInsertPerfomance,
    calculateFindPerfomance,
    calculateSortPerfomance,
    calculateInsertObjectPerfomance,
    campareResult,
    generateRandomArray,
    processeLinkiedListAndArray,
    Result
} = require('./Base')

let bubbleSort = require('./Algorithms/BubbleSort/bubbleSort.function');
let mergeSort = require('./Algorithms/MergeSort/mergeSort.function');
let quickSort = require('./Algorithms/QuickSort/quickSort.function');
let selectionSort = require('./Algorithms/SelectionSort/selectionSort.function');

let { binarySearch, binsearch } = require('./Algorithms/Searching/binarySearch.function');
let linearSearch = require('./Algorithms/Searching/linearSearch.function');



function main() {

    const randomSmall = generateRandomArray(1000);
    const randomBig = generateRandomArray(1000000);

    let randomSmallCopy = [];
    let randomBigCopy = [];

    let copy = () => {
        randomSmallCopy = copyArray(randomSmall);
        randomBigCopy = copyArray(randomBig);
    }

    copy();

    processeLinkiedListAndArray(randomSmallCopy, randomBigCopy);

    console.log(`\nSORT ALGORITHMS\n`);

    copy();
    let resultbubbleSortS = new Result(null, 'mergeSort', calculateSortPerfomance(mergeSort, randomSmallCopy), 1000);
    let resultbubbleSortL = new Result(null, 'mergeSort', calculateSortPerfomance(mergeSort, randomBigCopy), 1000000);

    copy();
    let resultquickSortS = new Result(null, 'quickSort', calculateSortPerfomance(quickSort, randomSmallCopy), 1000);
    let resultquickSortL = new Result(null, 'quickSort', calculateSortPerfomance(quickSort, randomBigCopy), 1000000);

    copy();
    //let resultselectionSortS = new Result(null, 'selectionSort', calculateSortPerfomance(selectionSort, randomSmallCopy), 1000);
    //let resultselectionSortL = new Result(null, 'selectionSort', calculateSortPerfomance(selectionSort, randomBigCopy), 1000000);

    copy();
    // let resultbubSortS = new Result(null, 'bubbleSort', calculateSortPerfomance(bubbleSort, randomSmallCopy), 1000);
    //resultbubbleSortL = new Result(null, 'bubbleSort', calculateSortPerfomance(bubbleSort, randomBigCopy), 1000000);
    console.log(resultbubbleSortS.getInfoText());
    console.log(resultquickSortS.getInfoText());
    //console.log(resultselectionSortS.getInfoText());
    //console.log(resultbubSortS.getInfoText());

    console.log(resultbubbleSortL.getInfoText());
    console.log(resultquickSortL.getInfoText());
    //console.log(resultselectionSortL.getInfoText());
    //console.log(resultbubbleSortL.getInfoText());


    console.log(`\nSEARCH: BINARY AND LINARY\n`);

    let resultbubbleSortS1 = new Result(null, 'binarySearch', calculateSearchPerfomance(binarySearch, randomSmallCopy, randomSmallCopy[randomSmallCopy.length - 1]), 1000);
    let resultbubbleSortL2 = new Result(null, 'binarySearch', calculateSearchPerfomance(binarySearch, randomBigCopy, randomBigCopy[randomBigCopy.length - 1]), 1000000);


    let resultbubbleSortS3 = new Result(null, 'linearSearch', calculateSearchPerfomance(linearSearch, randomSmallCopy, randomSmallCopy[randomSmallCopy.length - 1]), 1000);
    let resultbubbleSortL4 = new Result(null, 'linearSearch', calculateSearchPerfomance(linearSearch, randomBigCopy, randomBigCopy[randomBigCopy.length - 1]), 1000000);
    console.log(campareResult(resultbubbleSortS1, resultbubbleSortS3));
    console.log(campareResult(resultbubbleSortL2, resultbubbleSortL4));
}

let copyArray = (array) => [...array];

main();



