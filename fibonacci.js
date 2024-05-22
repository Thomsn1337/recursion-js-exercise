/**
 * @param {number} num
 */
function fibs(num) {
    if (num < 1) {
        console.log("number has to be greater than 1");
        return;
    }
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    const arr = [0, 1];

    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

console.log("Iterative fibonacci:");
console.log(fibs(8));

/**
 * @param {number} num
 */
function fibsRec(num) {
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    const arr = fibsRec(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

console.log("Recursive fibonacci:");
console.log(fibsRec(8));
