var obj = {};
Object.defineProperty(obj,"x",{
    configurable:true,  //22 undefined  当且仅当该属性的为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
    // configurable:false,  //11 Younger
    enumerable:false,
    value:"Younger",
    // get:function(){},
    // set:function(){
    //
    // }
});

console.log("11",obj.x);
delete obj.x;
console.log("22",obj.x);