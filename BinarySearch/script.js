export function binarySearch() {
    const array = [100, 4, 12, 55, 6, 15, 230, 25, 23, 21, 45, 312, 100, 2];

//Binary search

//First Example
//Binary search with while loop
//O(log n)
    function binarySearchF(arr, number) {
        let start = 0;
        let end = arr.length - 1;
        while (end >= start) {
            const idx = Math.floor((start + end) / 2);
            const candidate = arr[idx];
            if (number < candidate) end = idx - 1;
            else if (number > candidate) start = idx + 1;
            else return idx;
        }
        //Returns -1 if the number was not found in array
        return -1;
    }

//Second Example
//Binary search with recursion
//O(log n)
    function binarySearchR(arr, number, start, end) {
        //Returns -1 if the number was not found in array
        if (start > end) return -1;
        const idx = Math.floor((start + end) / 2);
        const candidate = arr[idx];
        if (number < candidate) return binarySearchR(arr, number, start, idx - 1);
        else if (number > candidate) return binarySearchR(arr, number, idx + 1, end);
        else return idx;
    }

//Prepare sorted array
    const sortedArr = [...array].sort((x, y) => x - y);
    const searchedNumber = 4;

    console.log("Binary search");
    console.log("Initial array ", sortedArr);
    console.log("Search index of " + searchedNumber);
    console.log(binarySearchF(sortedArr, searchedNumber));
    console.log(binarySearchR(sortedArr, searchedNumber, 0, sortedArr.length - 1));
    console.log("Check result -> ", sortedArr.findIndex(number => number === searchedNumber));
    console.log("--------");
}