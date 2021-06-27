export function recursion() {
    const array = [100, 4, 12, 23, 55, 6, 15, 230, 25, 23, 21, 45, 312, 100, 2];


//Find max number

//First Example
//Find max number with for loop
    function maxNum(arr) {
        let num = Number.MIN_VALUE;
        for (let i = 0; i < arr.length; i++) {
            const candidate = arr[i];
            if (candidate > num) num = candidate;
        }
        return num;
    }

//Second Example
//find max number with recursion
    function maxNumR(arr) {
        const copyArr = [...arr];
        if (copyArr.length === 1) return copyArr[0];
        if (copyArr[0] < copyArr[1]) copyArr[0] = copyArr[1];
        copyArr[1] = copyArr[--copyArr.length];
        return maxNum(copyArr);
    }


//Get max number
    const maxNum1 = maxNum(array);
    const maxNum2 = maxNumR(array);

//Show our max numbers
    console.log("Max numbers");
    console.log(maxNum1);
    console.log(maxNum2);
    console.log("--------");


//-------------------------------------------------------


//Find sum pf array's elements

//First Example
//Find sum of array's elements with forEach/for loop
    function arrSum(arr) {
        let sum = 0;
        arr.forEach(num => sum += num);
        //With for loop
        //---------------------------------------
        // for (let i = 0; i < arr.length; i++) {
        //     sum += arr[i];
        // }
        //---------------------------------------
        return sum;
    }

//Second  Example
//Find sum of array's elements with reduce
    function arrSumRed(arr) {
        return arr.reduce((sum, num) => sum + num, 0);
    }

//Third Example
//Find sum of array's elements with recursion
    function arrSumR(arr) {
        if (!(arr.length)) return 0;
        const copyArr = [...arr];
        return copyArr.pop() + arrSumR(copyArr);
    }

//Fourth Example
//Find sum of array's elements with tail recursion
    function arrSumTr(arr, sum = 0) {
        if (!(arr.length)) return sum;
        sum += arr.pop();
        return arrSumTr([...arr], sum);
    }


//Get our sums
    const sum1 = arrSum(array);
    const sum2 = arrSumRed(array);
    const sum3 = arrSumR(array);
    const sum4 = arrSumTr(array);

//Show our sums
    console.log("Array sums");
    console.log(sum1);
    console.log(sum2);
    console.log(sum3);
    console.log(sum4);
    console.log("--------");


//-------------------------------------------------------


//Find factorial

//First Example
//Factorial with for loop
    function fact(number) {
        let res = 1;
        for (let i = 1; i <= number; i++) {
            res *= i;
        }
        return res;
    }

//Second Example
//Factorial with recursion
    function factR(number) {
        if (number === 1) return 1;
        return number * factR(number - 1);
    }

//Third Example
//Factorial with tail recursion
    function factTr(number, result = 1) {
        if (number === 1) return result;
        return factTr(number - 1, result * number)
    }


//Get factorials
    const factNumber = 5;

    const fact1 = fact(factNumber);
    const fact2 = factR(factNumber);
    const fact3 = factTr(factNumber);

//Show factorials
    console.log("Factorials");
    console.log(fact1);
    console.log(fact2);
    console.log(fact3);
    console.log("--------");


//-------------------------------------------------------


//Find power of number

//First Example
//X pow y with for loop
    function pow(num, power) {
        let res = 1;
        for (let i = 1; i <= power; i++) {
            res *= num;
        }
        return res;
    }

//Second Example
//X pow y with recursion
    function powR(num, power) {
        if (power === 1) return num;
        return num * powR(num, power - 1);
    }

//Third Example
//X pow y with tail recursion
    function powTr(num, power, res = 1) {
        if (power === 0) return res;
        return powTr(num, power - 1, res * num)
    }


//Get out power
    const number = 2;
    const power = 3;

    const pow1 = pow(number, power);
    const pow2 = powR(number, power);
    const pow3 = powTr(number, power);

//Show our power
    console.log("Power");
    console.log(pow1);
    console.log(pow2);
    console.log(pow3);
    console.log(Math.pow(2, 3));
    console.log("--------");


//-------------------------------------------------------


//Find fibonacci number

//First Example
//Fibonacci with for loop
//In parameter we put the position of needed fibonacci number
    function fibo(position) {
        const resArr = [];
        resArr[1] = 1;
        resArr[2] = 1;
        for (let i = 3; i <= position; i++) {
            resArr[i] = resArr[i - 1] + resArr[i - 2];
        }
        return resArr[position];
    }

//Second Example
//Fibonacci with recursion (BAD and very SLOW example)
//Wy this example slow -> Try to find fiboR(60)
    function fiboR(position) {
        if (position === 1 || position === 2) return 1;
        const prevNum = fiboR(position - 1);
        const prevPrevNum = fiboR(position - 2);
        return prevNum + prevPrevNum;
    }

//Third Example
//Fibonacci with recursion and with cashing data (GOOD and FAST example)
    function fiboR1(position, nums = [0, 1, 1]) {
        if (position === 1 || position === 2) return 1;
        if (nums[position] !== undefined) return nums[position];
        const prevNum = fiboR1(position - 1, nums);
        const prevPrevNum = fiboR1(position - 2, nums);
        const number = prevNum + prevPrevNum;
        nums[position] = number;
        return number;
    }


//Get fibonacci numbers
    const fiboPos = 10;

    const fiboNum1 = fibo(fiboPos);
    const fiboNum2 = fiboR(fiboPos);
//WARNING VERY SLOW EXAMPLES
// const fiboNumS = fiboR(60);
// const fiboNumS1 = fiboR(100);
// console.log(fiboNumS);
// console.log(fiboNumS1);
    const fiboNum3 = fiboR1(fiboPos);
//ATTENTION FAST EXAMPLES
// const fiboNumS2 = fiboR1(60);
// const fiboNumS3 = fiboR1(100);
// console.log(fiboNumS2);
// console.log(fiboNumS3);
    const fiboNum4 = fiboR1(fiboPos);

//Show fibonacci number
    console.log("Fibonacci");
    console.log(fiboNum1);
    console.log(fiboNum2);
    console.log(fiboNum3);
    console.log(fiboNum4);
    console.log("--------");
}