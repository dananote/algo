// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim();
// const n = input
//   .split(" ")
//   .map((num) => parseInt(num))
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(n);

// 오태훈님 풀이
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = input.split(" ").reduce((acc, cur) => acc + Number(cur), 0);

console.log(n);
