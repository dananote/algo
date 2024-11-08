const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const result = input.reduce((acc, cur) => {
    return acc - Number(cur)
}, Number(input[0]) * 2)
console.log(result)
