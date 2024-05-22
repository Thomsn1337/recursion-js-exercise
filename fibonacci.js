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

console.log(fibs(8));
