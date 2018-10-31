/*每次当控制器（js引擎）转到可执行代码的时候，就会进入一个执行上下文。也就是当前代码的执行环境，而在执行上下文的生命周期中，有两个阶段，一个创建阶段，一个执行阶段。创建阶段的第一步是创建变量对象，而创建变量对象的三步：（变量函数的形参）、（function 函数声明）>（var, 变量声明)。 而执行阶段才会变量赋值，就是先声明，后赋值。*/
function test() {
    console.log(a); //undefined
    console.log(foo()); //2

    var a = 1;
    function foo() {
        return 2;
    }
}
test();

function test2() {
    console.log(foo);   //[Function: foo]
    console.log(bar);   //undefined

    var foo = "Hello";
    console.log(foo);   //Hello
    var bar = function() {
        return "World";
    }

    function foo() {
        return "hello";
    }
}
test2();