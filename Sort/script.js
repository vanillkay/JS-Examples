

const array = [100,4,12,55,6,15,230,25,23,21,45,312,100,2];


//Bubble sort

//First Example
//Bubble sort with for loop
//O(n^2)
function bubbleSortFor(arr){
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length; j++) {
            if (sortedArr[i] < sortedArr[j]) {
                const c = sortedArr[i];
                sortedArr[i] = sortedArr[j];
                sortedArr[j] = c;
                //Option for change two variables
                //[sortedArr[i], sortedArr[j]] = [sortedArr[j], sortedArr[i]];
            }
        }
    }
    return sortedArr;
}

//Second Example
//Bubble sort with for loop (optimized)
//O(n^2 / 2 - n)
function bubbleSortFor1(arr){
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = i + 1; j < sortedArr.length; j++) {
            if (sortedArr[i] > sortedArr[j]) {
                [sortedArr[i], sortedArr[j]] = [sortedArr[j], sortedArr[i]];
            }
        }
    }
    return sortedArr;
}

//Third Example
//Bubble sort with while loop
//O(n^2)
function bubbleSortWhile(arr){
    const sortedArr = [...arr];
    let isSorted = false;
    while (!isSorted){
        isSorted= true;
        for (let i = 0; i < sortedArr.length - 1; i++) {
            if (sortedArr[i] > sortedArr[i + 1]){
                isSorted = false;
                [sortedArr[i + 1], sortedArr[i]] = [sortedArr[i], sortedArr[i + 1]]
            }
        }
    }
    return sortedArr;
}

//Sort and show sorted arrays
console.log("Bubble sort");
console.log("Initial array -> ", array);
console.log(bubbleSortFor(array));
console.log(bubbleSortFor1(array));
console.log(bubbleSortWhile(array));
console.log("--------");


//-------------------------------------------------------


//Quick sort

//First Example
//Quick sort using recursion
function quickSortR(arr) {
    if (arr.length === 0) return [];
    const elem = arr[Math.floor( arr.length / 2)];
    const less = [];
    const more = [];
    for (let number of arr){
        if (number === elem) continue;
        if (number < elem) less.push(number);
        else more.push(number);
    }
    return [].concat(quickSortR(less), elem, quickSortR(more));
}

//More about quick sort
//https://stackabuse.com/quicksort-in-javascript


//Show sorted array
console.log("Quick sort");
console.log(quickSortR(array));
console.log("--------");