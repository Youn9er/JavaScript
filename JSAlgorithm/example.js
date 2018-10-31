'use strict'

for (let i=0; i<100; i++) {
    let  resultNum = i%3 == 0 && i%5 ==0;
    if (resultNum) {
        console.log(i);
    }
}

// 0
// 15
// 30
// 45
// 60
// 75
// 90

for (let i=0; i<100; i++) {
    let  resultNum = i%3 == 0 && i%5 ==0 && i/7 ==0;
    if (resultNum) {
        console.log(i);
    }
}

//0