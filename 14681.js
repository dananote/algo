const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map((num) => Number(num))
const [a, b] = input



if(a > 0) {
    quadrant = b > 0 ? 1 : 4
} else if(a < 0) {
    quadrant = b > 0 ? 2 : 3
}

console.log(quadrant)
