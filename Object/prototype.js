let obj = {};
obj.x = 1;
obj.y = 2;
console.log(obj);   //{ x: 1, y: 2 }

function foo(){};
foo.prototype.z = 3;
obj = new foo();
console.log(obj);   //{ x: 1, y: 2 }   foo {}
console.log(obj.z); //3 先在对象的属性中查找，查找不到的话再到原型链上查找 直到原型链的顶端


//对象每一个属性的标签：writable是否可写 enumeration是否可枚举 configurable是否可删除 value 值 set/get方法
//对象的标签：class表示类 extensible对象是否允许增加新的属性

//prototype2
let obj1 = {};
obj1.x = 1;
obj1.y = 2;

function Foo(){};
Foo.prototype.z = 3;
obj1 = new Foo();
typeof obj1.toString(); //true
console.log("zz",obj1.z);    //zz 3
"z" in obj1;    //true
console.log(obj1.hasOwnProperty("z"));  //false

let obj2 = {};
obj2.x = 1;
obj2.y = 2;
function func(){};
func.prototype.z = 3;
obj2 = new func();
console.log("obj2",obj2.z); //obj2 3
console.log("func",func.prototype.z);   //func 3
obj2.z = 5;
console.log("obj2",obj2.z); //obj2 5
console.log("func",func.prototype.z);   //func 3 still  不会被更改
delete obj2.z;
console.log(obj2.z);    //3
console.log(func.prototype.z);  //3 不会被删除


//使用Object.create创建

let obj3 = Object.create({x:1});
console.log("obj3",obj3.x); //obj3 1
console.log(typeof obj3.toString); //function
console.log(obj3.hasOwnProperty("x")); //false

let obj4 = Object.create(null);
console.log(obj4.toString);  //undefined
