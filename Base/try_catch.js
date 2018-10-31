try{
    try{
        throw new Error("oops");
    }finally {
        console.log("finally");
    }
}catch (e) {
    console.error("outer",e.message);
}

// finally
// outer oops

try{
    try{
        throw  new Error("ooops");
    }catch (e) {
        console.error("inner",e.message);
    }finally {
        console.log("finally")
    }
}catch (e) {
    console.error("outer",e.message);
}

// inner ooops  异常已经在内部处理
// finally

try{
    try{
        throw new Error("oops");
    }catch (e) {
        console.error("inner",e.message);
        throw e;
    }finally {
        console.error("finally");
    }
}catch (e) {
    console.error("outer",e.message);
}

// inner oops  如果内部异常没有处理抛给外部，在外部处理异常之前要先执行内部finally{};
// finally
// outer oops
