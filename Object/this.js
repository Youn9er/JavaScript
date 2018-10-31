var obj = {
    func:function(){
        return this;
    }
};

console.log(obj.func());  //{ func: [Function: func] }   obj