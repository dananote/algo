const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();

console.log(input)

const [a, b] = input
    .split("\n")
    .map((num) => Number(num));
console.log(a, b)
const getComparison = (a, b) => {
    const result =  a > b ? ">" : a < b ? "<" : "==";
    console.log(result)
}

getComparison(a, b)

