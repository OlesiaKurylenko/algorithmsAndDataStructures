const generateRandomArray = (count) => {
    let arr = [];
    let min = -100000;
    let max = 100000;
    while ((count--) > 0) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

module.exports = generateRandomArray;