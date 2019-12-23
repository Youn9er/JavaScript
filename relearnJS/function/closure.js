/**
 * @Author: Younger
 * @Date: 2019-05-20
 * @Time: 19:31
 */
var myObject = {
    foo: "bar",
    func: function () {
        var _this = this;
        console.log("outer this.foo=" + this.foo);   //outer this.foo=bar
        console.log("outer _this.foo=" + _this.foo); //outer _this.foo=bar
        (function() {
                console.log("inner _this.foo=" + this.foo);     //inner _this.foo=undefined
                console.log("inner _this.foo=" + _this.foo);    //inner _this.foo=bar
         }())
    }
};
myObject.func();
