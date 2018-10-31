//1.输入一个正整数，顺序打印出从1到N的全部正整数
//a).循环算法：
function  loop(){
	var num = prompt("请输入一个数：");
	var intNum = parseInt(num);
	for(var i=1; i<=intNum; i++){
		console.log(i);
	}
}	//在输入值依次为100，1000，,10000...时，浏览器卡顿，但依旧可打印出结果。

//b).递归算法：
function  recursion(intNum){
	//var num = prompt("请输入一个数：");
	//var intNum = parseInt(num);
	if(intNum){
		recursion(intNum - 1);
		console.log(intNum);
	}
}	//在输入10000时报错：Uncaught RangeError: Maximum call stack size exceeded。
	//递归函数调用时开销大，占用内存多，递归深度大对栈的压力就很大。产生“栈溢出”。
	//---总结：解决问题方法的效率，也跟空间的利用效率有关！

