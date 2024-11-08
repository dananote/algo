const fs = require("fs");
const input = Number(fs.readFileSync("./dev/stdin"))

const calcLeapYear = (year) => {
    // 400 배수일 땐 100배수 여도 됨
    if(year % 400 === 0) {
        return 1
    } else if (year % 4 === 0) {
    // 4의 배수일 땐 100배수가 아니여야 함
        return year % 100 === 0 ? 0 : 1
    } else {
        return 0
    }
}

console.log(calcLeapYear(input))