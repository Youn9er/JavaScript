let printf = function (item){
    return console.log(item);
};
let obj = {x:1,y:2};
printf(obj.x); //1
printf(obj["y"]);   //2


var obj1 = {x1:1,x2:2,x3:3,x4:4};
var i = 0,
    n = 5;
for(; i < n; i++){
    console.log(obj1["x"+i]);   //1 2 3 4
}


var p;
for (p in obj1){
    console.log(p); //x1 x2 x3 x4
    console.log(obj1[p]);   //1 2 3 4
}


let person = {name:"Younger",age:23};
delete person.name;
printf(person.name);    //undefined

delete Object.prototype;       //false

let descriptor = Object.getOwnPropertyDescriptor(Object,"prototype");
printf(descriptor.configurable);    //false

let cat = new Object;
cat.name = "kitty";
cat.legs = 4;

printf(cat.hasOwnProperty("legs")); //true
printf(cat.hasOwnProperty("name")); //true

console.log(cat.propertyIsEnumerable("legs"));  //true  propertyIsEnumerable是否可枚举
printf(cat.propertyIsEnumerable("toString"));   //false



//defineProperty
let dog = new Object;
dog.name = "wangwnag";
dog.legs = 4;
Object.defineProperty(dog,"price",{enumerable:false,value:200});
printf(dog.propertyIsEnumerable("price"));  //false
printf(dog.hasOwnProperty("price"));    //true

if(dog && dog.legs){
    printf(dog.legs *= 2);  //8
}