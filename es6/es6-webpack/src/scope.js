//作用域

var callBack = [];
for(var i = 0; i <= 3; i++){
    callBack[i] = function(){
        return i * 2;
    };
}

console.table([
    callBack[0](),
    callBack[1](),
    callBack[2](),
    callBack[3]()
]);
    // 0: 8
    // 1: 8
    // 2: 8


const callBack2 = [];
for(let j = 0; j <= 3; j ++){
    callBack2[j] = function(){
        return j * 2;
    };
}

console.table([
    callBack2[0](),
    callBack2[1](),
    callBack2[2](),
    callBack2[3]()
]);

        // 1: 2
        // 2: 4
        // 3: 6

//es5立即执行函数，保证块作用域
(function(){
    const foo = function(){
        return 1;
    };
    console.log("foo===1",foo() === 1);  //foo===1 true
    (function(){
        const foo = function(){
            return 2;
        };
        console.log("foo===2",foo() === 2); //foo===2 true
    })()
})();


//es6 {}保证块作用域
{
    function foo(){
        return 3;
    }
    console.log("foo===3", foo() === 3); //foo===3 true

    //{}包裹新的块作用域，不至于互相干扰
    {
        function foo(){
            return 4;
        }
        console.log("foo===4",foo() === 4); //foo===4 true
    }

    console.log("foo===3", foo() === 3); //foo===3 true 最外层{}内foo为3，内部第一个花括号为块级作用域，将自身作用域与最外层作用于进行隔离。
}