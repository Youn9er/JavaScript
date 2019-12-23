/**
 * @Author: Younger
 * @Date: 2019-05-21
 * @Time: 01:33
 */
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
fn(2);
// [Function: a]
// 123
// 123
// [Function: b]
