// Only change code beloew this line
function rangeOfNumbers(startN, endN) {
    if (startN === endN) {
        return [endN];
    } else {
        const countArray = rangeOfNumbers(startN + 1, endN);
        countArray.unshift(startN);
        return countArray;
    };
};
// Only change code above this line
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exportS = rangeOfNumbers;