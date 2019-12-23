# 预编译

## eg：
```
function fn(a){
    console.log(a);

    var a = 123;
    
    console.log(a);
    
    function a() {};
    
    console.log(a);
    
    var b = function() {};
    console.log(b);
    
    function d() {}
} 
fn(1);
// [Function: a]
// 123
// 123
// [Function: b]
```
> 预编译发生在函数执行的前一刻
* 创建AO对象 Activation Object（执行期上下文）如果是全局的话，生成GO（Global Object）
* 找到函数中的形参和变量声明，将变量和形参名作为AO属性名，值为undefined
* 将实参和形参相统一（形参赋值）
* 在函数体里面找到函数声明，值赋予函数体
## 开头提到的例子

```
AO: {
    a: undefined -> function a() {},
    b: undefined,
    d: undefined -> function d() {}
}
```
## 区块引用
* JavaScript执行顺序
************************
> 语法分析

> 预编译

> 解释执行
    
## 单行代码块

`<p>这是单行代码块</p>`

## 多行代码
```
test();
function() {
    console.log(1);
}
// 输出1，函数关键字function整体提升
```

```
console.log(a);
var a = 1; // 变量声明并赋值

// undefined 变量声明提升、赋值不提升
```

### 暗示全局变量
> 任何变量，未经声明就赋值，此变量就为全局变量所有

> 一切声明的全局变量，均是window的属性

```
function test(){
    var a = b = 123;
}
console.log(window.a); //undefined
console.log(window.b); //123
```
