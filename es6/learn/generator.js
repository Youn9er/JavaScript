/**
 * @Author: Younger
 * @Date: 2019-07-19
 * @Time: 09:57
 * @Description: es6 generator 生成器
 */

function * generator() {
    console.log("this is generator")
}

generator();  //没有执行

//--------------------------------------------

let ge = generator();

ge.next();  // this is generator

//--------------------------------------------

// yield暂缓执行，没执行一次next，相当于指针移动到下一个位置
function * helloGenerator() {
    yield "hello";
    yield "generator";
    return
}

let helloGe = helloGenerator();

console.log(helloGe.next());    //{ value: 'hello', done: false }
console.log(helloGe.next());    //{ value: 'generator', done: false }
console.log(helloGe.next());    //{ value: undefined, done: true }

//--------------------------------------------
function * gen(x, y){
    let z = yield x + y;
    let result = yield z * x;
    return result;
}

let g = gen(5, 6);
console.log(g.next());  //{ value: 11, done: false }
// console.log(g.next());  //{ value: NaN, done: false }
console.log(g.next(11));    //{ value: 55, done: true }

function * gene(x, y){
    let z = yield x + y;
    let result = yield z * x;
    return result;
}
let n = gene(5, 6);
let i = n.next();
// console.log(i); //{ value: 11, done: false }
console.log(n.next(i.value));   //{ value: 55, done: false }


//--------------------------------------------
// return
function * returnGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let reGe = returnGenerator();
console.log(reGe.next());   //{ value: 1, done: false }
console.log(reGe.next());   //{ value: 2, done: false }
console.log(reGe.return()); //{ value: undefined, done: true }
console.log(reGe.next());   //{ value: undefined, done: true }

//--------------------------------------------
// yield *
function * foo(){
    yield "A";
    yield "B";
}

function * yieGene() {
    yield 1;
    yield 2;
    yield * foo();
    yield 3;
}

let yiel = yieGene();
console.log(yiel.next());   //{ value: 1, done: false }
console.log(yiel.next());   //{ value: 2, done: false }
console.log(yiel.next());   //{ value: 'A', done: false }
console.log(yiel.next());   //{ value: 'B', done: false }
console.log(yiel.next());   //{ value: 3, done: false }


//--------------------------------------------

//大厨的活
function * chef() {
    console.log("fired chicken");   //炒鸡
    yield "worker";     //交由伙计处理
    console.log("sdd ingredients")  //上料
    yield "worker";     //交由伙计处理
}

//伙计的活
function * worker() {
    console.log("prepare chicken");     //准备工作
    yield "chef";   //交由大厨处理
    console.log("stewed chicken");
    yield "chef";   //交由大厨处理
    console.log("serve chicken");   //上菜
}

let ch = chef();
let wo = worker();
//流程控制
function run(gen){
    let v = gen.next();
    if(v.value == "chef"){
        run(ch);
    }else if(v.value == "worker"){
        run(wo);
    }
}
run(wo);

// prepare chicken
// fired chicken
// stewed chicken
// sdd ingredients
// serve chicken
