const arr = [1,3,5,7];

const sum = arr.reduce((acc, cur) => acc + cur, 0);

function cumulativeSum(arr) {
    let total = 0;
    
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

console.log('sum: ', cumulativeSum(arr));