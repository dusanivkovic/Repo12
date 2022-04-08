// Only change code beloew this line
function myCounter(n) {
    if (n <= 0) {
        return [];
    } else {
        const countArray = myCounter(n - 1);
        countArray.unshift(n);
        return countArray;
    };
};
// Only change code above this line
console.log(myCounter(n));
module.exportS = myCounter;