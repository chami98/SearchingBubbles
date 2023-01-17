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

function swap(arr,xp, yp)
{
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
 
const selectionSort =(arr,  n)=>
{
    let i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
    }
}
 
const printArray = ( arr,  size)=>
{
    console.log(arr);
}
 
let arr2 = [64, 25, 12, 22, 11];
    let n = 5;
    selectionSort(arr2, n);
    
    printArray(arr2, n);