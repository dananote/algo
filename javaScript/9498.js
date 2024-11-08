const fs = require("fs");
const input = Number(fs.readFileSync("./dev/stdin").toString().trim())

const getGrade = (a) => {
    if(a >= 90) {
        console.log('A')
    } else if (a >= 80 && a <= 89) {
        console.log('B')
    } else if (a >= 70 && a <= 79) {
        console.log('C')
    } else if(a >= 60 && a <= 69) {
        console.log('D')
    }
    else {
        console.log('F')
    }
}

getGrade(input)


// 다른 사람 풀이
// if(intValue >= 90) {
//     console.log('A');
// } else if(intValue >= 80) {
//     console.log('B');
// } else if(intValue >= 70) {
//     console.log('C');
// } else if(intValue >= 60) {
//     console.log('D');
// } else {
//     console.log('F');
// }
