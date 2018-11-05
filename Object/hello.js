"use strict";


function Hello(name){
    console.log("Hello" + " " + name);

    let s = "world";
    let z = `hello, ${s}!`;
    console.log(z);
}

module.exports = Hello;