//typeof 操作符
var box = undefined;
alert(typeof box);		//undefined
alert(age);				//Uncaught ReferenceError: age is not defined


//null类型
var boxNull = null;
console.log(typeof boxNull);	//object

var boxString = '';
console.log(typeof boxString);	//string


//undefined与null
console.log(undefined == null);	//true
console.log(undefined === null);//false  数据类型不同
console.log(typeof undefined == typeof null);	//false

//string与Boolean()函数
var boxString2 = 'Younger';
console.log(Boolean(boxString2));	//true
console.log(Boolean(boxString));	//false


//object类型
var boxObject = {};
var boxObject2 = null;
if(boxObject){			//进行隐式转换
	console.log('真');	//真
}else{
	console.log('假');
}

if (boxObject2) {
	console.log('真');
} else {
	console.log('假');	//假
}

//number类型
console.log(Number.MAX_VALUE);	//1.7976931348623157e+308  最大值
console.log(Number.MIN_VALUE);	//5e-324	最小值

console.log(1.7976931348623157e+309);	//Infinity  正无穷


console.log(Number.POSITIVE_INFINITY);	//Infinity
console.log(Number.NEGATIVE_INFINITY);	//-Infinity


var maxNum = 10e1000;
console.log(isFinite(maxNum));			//false    isFinite()判断是否超出范围的函数

console.log(0/0);	//NaN
console.log(12/0);	//Infinity
console.log(NaN + 1);	//NaN
console.log(NaN == NaN);	//false
console.log(NaN === NaN);	//false

//isNaN()函数
console.log(isNaN(NaN));	//true
console.log(isNaN(25));		//false
console.log(isNaN('25'));	//false
console.log(isNaN('Younger'));	//true
console.log(isNaN(true));	//false


//parseInt()函数
console.log(parseInt('0xAf'));	//175	16进制
console.log(parseInt(070));		//56	八进制
console.log(parseInt('Younger'));	//NaN
console.log(parseInt('100101110001',2));	//2417  第二个参数表示进制

//parseFloat()函数
console.log(parseFloat('123Younger'));	//123
console.log(parseFloat('12.3.4'));		//12.3
console.log(parseFloat('0xA'));			//0  parseFloat不能转换16进制

//string底层操作原理
var oString = 'Mr.';					//复制-销毁-赋值。
oString = oString + 'Young';
console.log(oString);					//Mr.Young

//obj.toString() 转换为字符串
var box = true;
console.log(box.toString());				//true
console.log(typeof box.toString());			//string


//String() 强制转换为字符串
var boxUn;
//console.log(boxUn.toString());				//Cannot read property 'toString' of undefined
console.log(String(boxUn));					//undefined

var boxNu = null;
//console.log(boxNu.toString());					//Uncaught TypeError: Cannot read property 'toString' of null
console.log(String(boxNu));					//null
console.log(typeof String(boxNu));			//string


//Object
//创建object
var boxObj = null;
console.log(boxObj);		//null
console.log(typeof boxObj);	//object

var boxObj2 = {};			//通过字面量方法创建对象
console.log(boxObj2);		//[object object]
console.log(typeof boxObj2);//object

var boxObj3 = new Object();
console.log(boxObj3);		//[object object]
console.log(typeof boxObj3);//object

var boxObj4 = new Object(2);	//new操作符创建对象可以传参数
console.log(boxObj4);		//Number {[[PrimitiveValue]]: 2}
var age = 100;
console.log(boxObj4 + age);	//102
console.log(typeof (boxObj4 + age));	//number

var boxNum = new Number(2);
console.log(boxNum);		//Number {[[PrimitiveValue]]: 2}
console.log(typeof boxNum);		//object