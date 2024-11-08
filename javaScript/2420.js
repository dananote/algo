const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ").map((num) => Number(num)).sort((a, b) => a - b)

console.log(input[1] - input[0])

// 두 수중 더 큰 수에서 작은 수를 마이너스