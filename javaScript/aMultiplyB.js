const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const result = input.reduce((acc, cur) => acc * Number(cur), 1);
console.log(result)