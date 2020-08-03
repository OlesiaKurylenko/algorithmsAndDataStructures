const { calculateInsertPerfomance,
    calculateInsertObjectPerfomance,
    calculateSearchPerfomance,
    calculateFindPerfomance,
    calculateSortPerfomance } = require('./calculatePerfomance');

let SinglyLinkedList = require('../Data/SinglyLinkedLists/SinglyLinkedList.class');
let Result = require('./result.class');
let compareResult = require('./campareResult.function');

let processeLinkiedListAndArray = (randomSmallCopy, randomBigCopy) => {

    let stackSmall = null;
    let stackBig = null;
    let arraySmall = null;
    let arrayBig = null;

    let push = () => {
        stackSmall = new SinglyLinkedList();
        stackBig = new SinglyLinkedList();
        arraySmall = new Array();
        arrayBig = new Array();

        let stackSmallResult = new Result(
            'SinglyLinkedList',
            'push',
            calculateInsertPerfomance(stackSmall.push.bind(stackSmall), randomSmallCopy),
            randomSmallCopy.length);

        let stackBigResult = new Result(
            'SinglyLinkedList',
            'push',
            calculateInsertPerfomance(stackBig.push.bind(stackBig), randomBigCopy),
            randomBigCopy.length);

        let arraySmallResult = new Result(
            'Array',
            'push',
            calculateInsertPerfomance(arraySmall.push.bind(arraySmall), randomSmallCopy),
            randomSmallCopy.length);

        let arrayBigResult = new Result(
            'Array',
            'push',
            calculateInsertPerfomance(arrayBig.push.bind(arrayBig), randomBigCopy),
            randomBigCopy.length);
        console.log(compareResult(stackSmallResult, arraySmallResult));
        console.log(compareResult(stackBigResult, arrayBigResult));
    }

    let unshift = () => {
        stackSmall = new SinglyLinkedList();
        stackBig = new SinglyLinkedList();
        arraySmall = new Array();
        arrayBig = new Array();

        let stackSmallResult = new Result(
            'SinglyLinkedList',
            'unshift',
            calculateInsertPerfomance(stackSmall.unshift.bind(stackSmall), randomSmallCopy),
            randomSmallCopy.length);

        let stackBigResult = new Result(
            'SinglyLinkedList',
            'unshift',
            calculateInsertPerfomance(stackBig.unshift.bind(stackBig), randomBigCopy),
            randomBigCopy.length);

        let arraySmallResult = new Result(
            'Array',
            'unshift',
            calculateInsertPerfomance(arraySmall.unshift.bind(arraySmall), randomSmallCopy),
            randomSmallCopy.length);

        let arrayBigResult = new Result(
            'Array',
            'unshift',
            calculateInsertPerfomance(arrayBig.unshift.bind(arrayBig), randomBigCopy),
            randomBigCopy.length);
        console.log(compareResult(stackSmallResult, arraySmallResult));
        console.log(compareResult(stackBigResult, arrayBigResult));
    }

    let indexOf = () => {
        stackSmall = new SinglyLinkedList();
        stackBig = new SinglyLinkedList();
        arraySmall = new Array();
        arrayBig = new Array();

        let stackSmallResult = new Result(
            'SinglyLinkedList',
            'getIndexOf',
            calculateFindPerfomance(stackSmall.getIndexOf.bind(stackSmall), randomSmallCopy[randomSmallCopy.length - 1]),
            randomSmallCopy.length);

        let stackBigResult = new Result(
            'SinglyLinkedList',
            'getIndexOf',
            calculateFindPerfomance(stackBig.getIndexOf.bind(stackBig), randomBigCopy[randomBigCopy.length - 1]),
            randomBigCopy.length);

        let arraySmallResult = new Result(
            'Array',
            'indexOf',
            calculateFindPerfomance(arraySmall.indexOf.bind(arraySmall), randomSmallCopy[randomSmallCopy.length - 1]),
            randomSmallCopy.length);

        let arrayBigResult = new Result(
            'Array',
            'indexOf',
            calculateFindPerfomance(arrayBig.indexOf.bind(arrayBig), randomBigCopy[randomBigCopy.length - 1]),
            randomBigCopy.length);
        console.log(compareResult(stackSmallResult, arraySmallResult));
        console.log(compareResult(stackBigResult, arrayBigResult));
    }

    push();
    unshift();
    indexOf();
}

module.exports = { processeLinkiedListAndArray };