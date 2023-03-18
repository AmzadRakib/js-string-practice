let firstNum = 5;
let secondNum = 7;
console.log(firstNum, secondNum);
// wrong approach: 

firstNum = secondNum;
secondNum = firstNum;

// approach: 1  swap,

let tempNum = firstNum;
firstNum = secondNum;
secondNum = tempNum;

// approach: 2  Destructing , 

[firstNum, secondNum] = [secondNum, firstNum];
console.log(firstNum, secondNum);