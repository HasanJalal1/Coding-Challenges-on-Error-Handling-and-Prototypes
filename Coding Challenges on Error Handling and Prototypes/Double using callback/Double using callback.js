function doubleArray(arr, callback) {
    return arr.map(callback);
}

function double(num) {
    return num * 2;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, double);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
