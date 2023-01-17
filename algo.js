const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        // Last i elements are already in place 
        for (let j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true then swap them
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Print the sorted array
    console.log(arr);
}


// This is our unsorted array
let arr = [234, 43, 55, 63, 5, 6, 235, 547];


// Now pass this array to the bubbleSort() function
bubbleSort(arr);

function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr, n) {
    var i, j, min_idx;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        // Swap the found minimum element with the first element
        swap(arr, min_idx, i);
    }
}

function printArray(arr, size) {
    var i;
    for (i = 0; i < size; i++)
        document.write(arr[i] + " ");
    document.write(" <br>");
}

var arr2 = [64, 25, 12, 22, 11];
var n = 5;
selectionSort(arr, n);
document.write("Sorted array: <br>");
printArray(arr2, n);

