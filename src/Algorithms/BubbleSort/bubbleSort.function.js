const bubbleSort = (arr) => {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) { // this was missing
            if (arr[j] > arr[j + 1]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;

    /* let noSwaps;
     for (let i = arr.length; i > 0; i--) {
         noSwaps = true;
         for (let j = 0; j < i - 1; j++) {
             if (arr[j] > arr[j + 1]) {
                 let temp = arr[j];
                 arr[j] = arr[j + 1];
                 arr[j + 1] = temp;
                 noSwaps = false;
             }
         }
         if (noSwaps) break;
     }
     return arr;*/
}

module.exports = bubbleSort;