const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const [a, b] = input
    .split(" ")
    .map((num) => Number(num));

const getComparison = (a, b) => {
    const result =  a > b ? ">" : a < b ? "<" : "==";
    console.log(result)
}

getComparison(a, b)

