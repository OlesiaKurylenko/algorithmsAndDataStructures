let Stack = require('./Data/Stacks/Stack.class');
let SinglyLinkedList = require('./Data/SinglyLinkedLists/SinglyLinkedList.class');

let bubbleSort = require('./Algorithms/BubbleSort/bubbleSort.function');
let mergeSort = require('./Algorithms/MergeSort/mergeSort.function');
let quickSort = require('./Algorithms/QuickSort/quickSort.function');
let selectionSort = require('./Algorithms/SelectionSort/selectionSort.function');

let binarySearch = require('./Algorithms/Searching/binarySearch.function');
let linearSearch = require('./Algorithms/Searching/linearSearch.function');


const generateRandomArray = require('./Base/generateRandomArray.function');
const { calculateInsertPerfomance, calculatePerfomance, calculateFindPerfomance, calculateSortPerfomance } = require('./Base/calculatePerfomance');

function main() {

    const randomSmall = generateRandomArray(1000);
    const randomBig = generateRandomArray(1000000);

    let randomSmallCopy = [];
    let randomBigCopy = [];

    let copy = () => {
        randomSmallCopy = copyArray(randomSmall);
        randomBigCopy = copyArray(randomBig);
    }

    console.log(`###\tCOMPARE Singly Linked List and Array\t###`);
    console.log('\n-- push --\n')
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
    console.log(`\ndifference: 1000 items: SinglyLinkedList > Array on ${result - resultArray} or ${Math.round(result / resultArray * 100) / 100} times,
    \t1 000 000 items: SinglyLinkedList > Array on ${result2 - resultBigArray} or ${Math.round(result2 / resultBigArray * 100) / 100} times\n`)
    console.log('\n-- indexOf --\n')

    let resultFindStackSmall = calculateFindPerfomance(stackSmall.getIndexOf.bind(stackSmall), randomSmallCopy[randomSmallCopy.length - 2])
    let resultFindStackBig = calculateFindPerfomance(stackBig.getIndexOf.bind(stackBig), randomBigCopy[randomBigCopy.length - 2])

    console.log(`SinglyLinkedList:\tfind last Item for 1000 items :\t${resultFindStackSmall},\t for 1000000 items :\t${resultFindStackBig}`);

    let resultFindArraySmall = calculateFindPerfomance(arraySmall.indexOf.bind(arraySmall), randomSmallCopy[randomSmallCopy.length - 2])
    let resultFindArrayBig = calculateFindPerfomance(arrayBig.indexOf.bind(arrayBig), randomBigCopy[randomBigCopy.length - 2])

    console.log(`Array:\t\t\tfind last Item for 1000 items :\t${resultFindArraySmall},\t for 1000000 items :\t${resultFindArrayBig}`);

    console.log(`\ndifference : 1000 items: SinglyLinkedList > Array on ${result - resultArray} or ${Math.round(result / resultArray * 100) / 100} times,
    \t1 000 000 items: SinglyLinkedList > Array on ${result2 - resultBigArray} or ${Math.round(result2 / resultBigArray * 100) / 100} times\n`);

    console.log(`\n###\tSort Algotithms\t###\n`);
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
    console.log(`\n###\tCompare Binary Search and Linear Search \t###\n`);

    resultbubbleSortS = calculateFindPerfomance(binarySearch, randomSmallCopy[randomSmallCopy.length - 2])
    resultbubbleSortL = calculateFindPerfomance(binarySearch, randomBigCopy[randomBigCopy.length - 2])
    console.log(`binarySearch : 1000 items : ${resultbubbleSortS}\t1000000 items: ${resultbubbleSortL}`);

    resultbubbleSortS = calculateFindPerfomance(linearSearch, randomSmallCopy[randomSmallCopy.length - 2])
    resultbubbleSortL = calculateFindPerfomance(linearSearch, randomBigCopy[randomBigCopy.length - 2])
    console.log(`linearSearch : 1000 items : ${resultbubbleSortS}\t1000000 items: ${resultbubbleSortL}\n`);
}
let copyArray = (array) => [...array];
main();