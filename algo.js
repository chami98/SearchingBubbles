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
const insertionSort = (arr, n) => {
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
printArray(arr, n); \

// Javascript implementation of QuickSort


// A utility function to swap two elements
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
const partition = (arr, low, high) => {

    // pivot
    let pivot = arr[high];

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {

            // Increment index of
            // smaller element
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}

/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
const quickSort = (arr, low, high) => {
    if (low < high) {

        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high);

        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Function to print an array
const printArray = (arr, size) => {
    for (let i = 0; i < size; i++)
        document.write(arr[i] + " ");

    document.write("<br>");
}

// Driver Code

let arr3 = [10, 7, 8, 9, 1, 5];
let n2 = arr.length;

quickSort(arr, 0, n - 1);
document.write("Sorted array: <br>");
printArray(arr, n);
