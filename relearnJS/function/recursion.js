function mul(number) {
    return undefined;
}

/**
 * @Author: Younger
 * @Date: 2019-05-21
 * @Time: 00:25
 */

// 递归：
// 找规律
// 找出口
                                                
console.log(mul(10))    //3628800

function fb(n) {
    if(n === 1 || n === 2){
        return 1;
    }
    return fb(n - 1) + fb(n - 2);
}
console.log(fb(10)) //55

