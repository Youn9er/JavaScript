//es5中常量的写法

Object.defineProperty(window,"PI2",{
    value:3.1415926,
    writable:false  //只读
});

console.log(window.PI2);    //3.1415926


const PI = 3.14;
// PI = 3;         //SyntaxError: "PI" is read-only
console.log(PI);    //3.14   

