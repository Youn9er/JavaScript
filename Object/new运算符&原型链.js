function Foo() {};
Foo.prototype.x = 1;
var obj = new Foo();
console.log(obj.x); //1
console.log(obj.hasOwnProperty("x")); //false
console.log(obj.__proto__.hasOwnProperty("x")); //true