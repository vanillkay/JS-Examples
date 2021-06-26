
//Number to binary
//WARNING only for positive numbers


//First Example
//Number to binary string with while loop
function toBinaryW(number){
    let result = "";
    while (number > 0){
        result += number % 2;
        number = Math.floor(number / 2);
    }
    return result.split("").reverse().join("");
}

//Second Example
//WARNING only for positive ONE BYTE numbers (8 BITS) (2^8)
//Number to binary with for loop
function toBinaryF(number){
    let result = "";
    for (let i = 0; i < 7; i++) {
        result += (number >> i) % 2;
    }
    return result.split("").reverse().join("");
}

//Third Example
//Number to binary with while loop and binary right SHIFT and logical AND
function toBinaryW1(number){
    let result = "";
    while (number > 0){
        //Logical AND
        result += number & 1;
        //Binary right shift
        number = number >> 1;
        //number >>= number
    }
    return result.split("").reverse().join("");
}

//Fourth Example
//WARNING only for ONE BYTE numbers (8 BITS) (2^8)
//Number to binary with while loop and binary right SHIFT and logical AND
function toBinaryF1(number){
    let result = "";
    for (let i = 0; i < 7; i++) {
        result += (number >> i) % 2;
    }
    return result.split("").reverse().join("");
}

//Fifth Example
//WARNING only for positive ONE BYTE numbers (8 BITS) (2^8)
//Number to binary with while loop and binary right SHIFT and logical AND without reverse string
function toBinaryF2(number){
    let result = "";
    for (let i = 6; i >= 0; i--) {
        result += (number >> i) & 1;
    }
    return result;
}


const number = 23;

//Show our binary number
console.log("Number " + 23 + " to binary");
console.log(toBinaryW(number));
console.log(toBinaryF(number));
console.log(toBinaryW1(number));
console.log(toBinaryF1(number));
console.log(toBinaryF2(number));
console.log("Check result -> ", number.toString(2));
console.log("--------");


//-------------------------------------------------------


//Binary to decimal number

//First Example
//Get decimal number from binary using for loop
function getDecimalF(binary){
    let res = 0;
    const length = binary.length;
    for (let i = length - 1; i >= 0; i--) {
        const bit = +binary.charAt(i);
        if (bit === 0) continue;
        res += Math.pow(2, length - i - 1);
    }
    return res;
}

//Second Example
//Get decimal number from binary using for loop (advanced)
function getDecimalF1(binary){
    let res = 0;
    const length = binary.length;
    for (let i = length - 1; i >= 0; i--) {
        const bit = binary.charAt(i) - '0';
        res += bit << length - i - 1;
    }
    return res;
}

//Show our decimal
const binary = "10111";

console.log("Binary number " + binary + " to decimal number");
console.log(getDecimalF(binary));
console.log(getDecimalF1(binary));
console.log("--------");