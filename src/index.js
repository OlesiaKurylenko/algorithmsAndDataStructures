let Stack = require('./Data/Stacks/Stack.class');
let SinglyLinkedList = require('./Data/SinglyLinkedLists/SinglyLinkedList.class');

let bubbleSort = require('./Algorithms/BubbleSort/bubbleSort.function');
let mergeSort = require('./Algorithms/MergeSort/mergeSort.function');
let quickSort = require('./Algorithms/QuickSort/quickSort.function');
let selectionSort = require('./Algorithms/SelectionSort/selectionSort.function');

let { binarySearch, binsearch } = require('./Algorithms/Searching/binarySearch.function');
let linearSearch = require('./Algorithms/Searching/linearSearch.function');


const generateRandomArray = require('./Base/generateRandomArray.function');
const { calculateInsertPerfomance,
    calculateInsertObjectPerfomance,
    calculateSearchPerfomance,
    calculateFindPerfomance,
    calculateSortPerfomance } = require('./Base/calculatePerfomance');

function main() {

    const randomSmall = generateRandomArray(1000);
    const randomBig = generateRandomArray(1000000);

    let randomSmallCopy = [];
    let randomBigCopy = [];

    let copy = () => {
        randomSmallCopy = copyArray(randomSmall);
        randomBigCopy = copyArray(randomBig);
    }

    console.log(`### COMPARE Singly Linked List and Array ###`);
    console.log('\n\t-- push --\n')
    let stackSmall = new SinglyLinkedList();
    copy();
    let result = calculateInsertPerfomance(stackSmall.push.bind(stackSmall), randomSmallCopy)
    let stackBig = new SinglyLinkedList();
    let result2 = calculateInsertPerfomance(stackBig.push.bind(stackBig), randomBigCopy)
    console.log(`SinglyLinkedList:\tpush 1000 items :\t${result},\tpush 1000000 items :\t${result2}`);
    let arraySmall = new Array();
    let resultArray = calculateInsertPerfomance(arraySmall.push.bind(arraySmall), randomSmallCopy)
    let arrayBig = new Array();
    let resultBigArray = calculateInsertPerfomance(arrayBig.push.bind(arrayBig), randomBigCopy)
    console.log(`Array:\t\t\tpush 1000 items :\t${resultArray},\tpush 1000000 items :\t${resultBigArray}`);

    console.log('\n\t-- unshift --\n')
    let stackSmallO = new SinglyLinkedList();
    copy();
    let resultO = calculateInsertPerfomance(stackSmallO.unshift.bind(stackSmallO), randomSmallCopy)
    let stackBigO = new SinglyLinkedList();
    let result2O = calculateInsertPerfomance(stackBigO.unshift.bind(stackBigO), randomBigCopy)
    console.log(`SinglyLinkedList:\tpush 1000 items :\t${resultO},\tpush 1000000 items :\t${result2O}`);
    let arraySmallO = new Array();
    let resultArrayO = calculateInsertPerfomance(arraySmallO.unshift.bind(arraySmallO), randomSmallCopy)
    let arrayBigO = new Array();
    let resultBigArrayO = calculateInsertPerfomance(arrayBigO.unshift.bind(arrayBigO), randomBigCopy)
    console.log(`Array:\t\t\tpush 1000 items :\t${resultArrayO},\tpush 1000000 items :\t${resultBigArrayO}`);
    console.log('\n\t-- indexOf --\n')

    let resultFindStackSmall = calculateFindPerfomance(stackSmall.getIndexOf.bind(stackSmall), randomSmallCopy[randomSmallCopy.length - 2])
    let resultFindStackBig = calculateFindPerfomance(stackBig.getIndexOf.bind(stackBig), randomBigCopy[randomBigCopy.length - 2])

    console.log(`SinglyLinkedList:\tfind last Item for 1000 items :\t${resultFindStackSmall},\t for 1000000 items :\t${resultFindStackBig}`);

    let resultFindArraySmall = calculateFindPerfomance(arraySmall.indexOf.bind(arraySmall), randomSmallCopy[randomSmallCopy.length - 2])
    let resultFindArrayBig = calculateFindPerfomance(arrayBig.indexOf.bind(arrayBig), randomBigCopy[randomBigCopy.length - 2])

    console.log(`Array:\t\t\tfind last Item for 1000 items :\t${resultFindArraySmall},\t for 1000000 items :\t${resultFindArrayBig}`);

    console.log(`\n### Sort Algotithms ###\n`);
    let resultbubbleSortS = '';
    let resultbubbleSortL = '';
    /* copy();
     resultbubbleSortS = calculateSortPerfomance(bubbleSort, randomSmallCopy)
     resultbubbleSortL = calculateSortPerfomance(bubbleSort, randomBigCopy)
     console.log(`bubbleSort : 1000 items : ${resultbubbleSortS}\t1000000 items: ${resultbubbleSortL}\n`);
 */
    copy();
    resultbubbleSortS = calculateSortPerfomance(mergeSort, randomSmallCopy)
    resultbubbleSortL = calculateSortPerfomance(mergeSort, randomBigCopy)
    console.log(`mergeSort : 1000 items : ${resultbubbleSortS}\t1000000 items: ${resultbubbleSortL}`);

    copy();
    resultbubbleSortS = calculateSortPerfomance(quickSort, randomSmallCopy)
    resultbubbleSortL = calculateSortPerfomance(quickSort, randomBigCopy)
    console.log(`quickSort : 1000 items : ${resultbubbleSortS}\t1000000 items: ${resultbubbleSortL}\n`);

    /*copy();
    resultbubbleSortS = calculateSortPerfomance(selectionSort, randomSmallCopy)
    resultbubbleSortL = calculateSortPerfomance(selectionSort, randomBigCopy)
    console.log(`selectionSort : 1000 items : ${resultbubbleSortS}\t1000000 items: ${resultbubbleSortL}\n`);
*/
    console.log(`\n### Compare Binary Search and Linear Search ###\n`);

    let resultbubbleSortS1 = calculateSearchPerfomance(binarySearch, randomSmallCopy, randomSmallCopy[randomSmallCopy.length - 1])
    let resultbubbleSortL2 = calculateSearchPerfomance(binarySearch, randomBigCopy, randomBigCopy[randomBigCopy.length - 1])
    console.log(`binarySearch : 1000 items : ${resultbubbleSortS1} \t1000000 items: ${resultbubbleSortL2}`);

    let resultbubbleSortS3 = calculateSearchPerfomance(linearSearch, randomSmallCopy, randomSmallCopy[randomSmallCopy.length - 1])
    let resultbubbleSortL4 = calculateSearchPerfomance(linearSearch, randomBigCopy, randomBigCopy[randomBigCopy.length - 1])
    console.log(`linearSearch : 1000 items : ${resultbubbleSortS3} \t1000000 items: ${resultbubbleSortL4}\n`);
}

let copyArray = (array) => [...array];

main();