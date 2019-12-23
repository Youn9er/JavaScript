/**
 * @Author: Younger
 * @Date: 2019-07-19
 * @Time: 18:32
 * @Description:  es6 promise
 */

const promise = new Promise((resolve, reject) => {
    // do someThings
    // if (/* 异步操作成功 */) {
    //     resolve(value);
    // } else {
    //     reject(error);
    // }
});

// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由JavaScript引擎提供；
// resolve函数的作用是，讲promise对象的状态从"未完成"变成"成功"（即从pending变为resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去，reject函数的作用是，将promise对象的状态从未完成变为失败（即从pending变为rejected），再一步操作失败时调用，并将异步操作报出的错误，作为参数传递出去；
// promise实例生成之后，可以用then方法分别制定resolved状态和rejected状态的回调函数

promise.then(value => {

}, (error) => {

});

// .eg：
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "done");
    });
}

timeout(100)
    .then(value => {
        console.log(value); //done
    })

// Promise新建后会立即执行
let _promise = new Promise((resolve, reject) => {
    console.log("Promise is created");
    resolve();
});

console.log("_promise.prototype==",_promise.prototype);

_promise.then(() => {
    console.log("resolved");
});

console.log("Hi!");
// Promise is created
// Hi!
// resolved

// 异步加载图片
function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };

        image.onerror = () => {
            reject(new Error("Could not load image at" + url));
        };

        image.src = url;
    });
}
