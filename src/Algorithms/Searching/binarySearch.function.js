const binarySearch = (arr, elem) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

const binsearch = (array, val, min, max) => {
    if (!min && !max) {
        min = 0; max = array.length - 1;
    }
    if (max < min) return -1;
    let midpoint = (min + max) / 2;
    if (array[midpoint] > val) return binsearch(val, array, min, midpoint - 1);
    if (array[midpoint] < val) return binsearch(val, array, midpoint + 1, max);
    if (val == array[midpoint]) return 0;
    return -1;
}

module.exports = { binarySearch, binsearch };