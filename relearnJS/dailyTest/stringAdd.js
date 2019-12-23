/**
 * @Author: Younger
 * @Date: 2019-05-29
 * @Time: 13:16
 */
console.log("0 || 1 =" + (0 || 1));
console.log("1 || 2 =" + (1 || 2));
console.log("0 && 1 =" + (0 && 1));
console.log("1 && 2 =" + (1 && 2));
console.log(false == "0");
console.log(false === "0");

let a = {};
let b = {key: "b"};
let c = {key: "c"};
a[b] = 123;
a[c] = 456;
console.log(a[b]);
