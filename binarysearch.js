// We are creating a recursive Binary Search function that can be called on any Array that will recal
// our target value with Olog(n) time complexity

let array = [4, 5, 6, 8, 8, 12, 13, 15, 100, 112, 208]

function binarySearch (arr, target, start=0, end=arr.length-1) {
    
    if (start > end) {
        console.log("Value was not found! ");
        return -1;
    }

    const middle = Math.floor((start + end) / 2)

    if (arr[middle] === target) {
        
        console.log(`${target} found at index ${middle}`);
        return middle;

    } else if (arr[middle] > target) {
        return binarySearch(arr, target, start, middle-1);

    } else if (arr[middle] < target) {
        return binarySearch(arr, target, middle+1, end);
    }
}

//binarySearch(array, 15);