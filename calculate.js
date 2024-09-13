const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map((num) => Number(num));

const calculate = (numArr) => {
    const plus = numArr[0] + numArr[1];
    const minus = numArr[0] - numArr[1];
    const multiply = numArr[0] * numArr[1];
    const divide = Math.floor(numArr[0] / numArr[1]);
    const remain = numArr[0] % numArr[1];

    console.log(plus + "\n" + minus + "\n" + multiply + "\n" + divide + "\n" + remain);
}

calculate(input)


// 다른 사람 풀이
// const solution = (input) => {
//     const operators = ["+", "-", "*", "/", "%"];
//     const [a, b] = input[0].split(" ").map(Number);
//     return operators.map((operator) => Math.floor(eval(`${a}${operator}${b}`))).join("\n");
// };
//
// console.log(solution(input));


// 오태훈님 풀이
const [a, b] = input;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

