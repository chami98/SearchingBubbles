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
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

const selectionSort = (arr, n) => {
    let i, j, min_idx;

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

const printArray = (arr, size) => {
    console.log(arr);
}

let arr2 = [64, 25, 12, 22, 11];
let n = 5;
selectionSort(arr2, n);

printArray(arr2, n);

// Javascript program for insertion sort 

// Function to sort an array using insertion sort
function insertionSort(arr, n) {
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// A utility function to print an array of size n 
function printArray(arr, n) {
    let i;
    for (i = 0; i < n; i++)
        document.write(arr[i] + " ");
    document.write("<br>");
}

// Driver code
let arr1 = [12, 11, 13, 5, 6];
let n1 = arr.length;

insertionSort(arr, n);
printArray(arr, n);
