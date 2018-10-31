/*do...while循环：
var a = 10;
do{
    console.log(a);
    a++;
}
while(a<=5){
}
console.log(a);*/

/*if....else if...else循环语句：
var i = 3;
if(i>5){
    console.log('good morning');
}else if(i==5){
    console.log('good afternoon');
}else{
    console.log('good everning');
}*/

/*for循环：
for(b=0;b<6;b++){
/!*    if(b==3){
        break;
    }*!/
    if(b==3){
        continue;
    }
    console.log(b);
}*/

/*方法定义：
function y(a,b) {
    document.write(a+b);
}
y(a=4,b=5);*/


/*带有返回值的函数：
function myfunction() {
    var a= 5;
    return a;
    var b = myfunction();

    /!*console.log(b);*!/
}
document.write(myfunction());*/

//arguments的使用：
function myfunction2() {
    var r = 0;
    for(var i=0;i<arguments.length;i++){
        r+=arguments[i];
    }
    return r;
}
document.write(myfunction2(1,3,6));

/*函数的作用域（函数不可以调用他以内的函数，但是内函数可以调用外函数）：
var a = 5;
function myfunction3() {
    var b = 6;
    function myfunction4() {
        var c = 7;
        console.log(a+'^'+b+'^'+c);
    }
    myfunction4();
    console.log(a+'-'+b);
}
myfunction3();*/


//数组的定义：
var arr1 = new Array(1,2,3,4);
var arr2 = [5,6,7,8];

/*数组的遍历：
var arr1=[
           ['小明','小红','小花','小杨'],
           ['Bill','Bob','James','kobe']
         ];

    for(var i=0;i<arr1[0].length;i++){
        console.log(arr1[0][i]);
    }

function myfunction6(){
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr1[i].length;j++){
            console.log(arr1[i][j]);
        }
    }
}
myfunction6()*/

/*调用带参数的函数：
function myfunction7(name,job) {
    alert("Welcome " + name + ", the " + job);
}
myfunction7('Younger','CEO');*/

//数组对象方法：
//var arr1 =[20,8,345,5,4,936,7,245,657555552,11];
/*delete arr1[0];
console.log(arr1);*/ //删除数组中某个元素，仅仅删除，删除后数组长度不变

/*var arr2 =arr1.toString();
console.log(typeof arr2);*/  //把数组转换成字符串并且返回结果

/*var arr3 =arr1.join('^');
console.log(arr3);*/   //数组转换成字符串，并且可以定义元素之间连接的符号

/*var arr4 =['a','g','e','r'];
console.log(arr1.concat(arr4));*/  //连接两个或者多个数组

/*arr1.pop();
console.log(arr1);
console.log(arr1.length);*/ //删除数组最后一个元素，数组的长度减1

/*arr1.shift()
console.log(arr1);*/  //删除数组中第一个元素，数组长度减1

/*arr1.push('fdsfsdf');
console.log(arr1); */ //向数组的末尾添加一个或更多元素，并且计入数组的新长度

/*arr1.unshift('qwewqr');
console.log(arr1); */ //向数组的开头添加一个或更多元素，并返回新的长度。

/*var arr2 =arr1.slice(2,4);
console.log(arr2);*/  //对一个数组截取2-4这一段

/*var arr3 =arr1.reverse();
console.log(arr3);*/   //对一个数组进行倒序排列

/*var arr4 =arr1.sort();
console.log(arr4);*/  //对数组的元素进行排序但是排序算法不理想

/*var arr5 =arr1.sort(function myfunction(num1,num2) {
    return num1-num2;
});
console.log(arr5);*/  //数字按照从小到大排列

/*var arr6 =arr1.sort(function myfunction2(num1,num2){
    return num2-num1;
});
console.log(arr6);*/  //数字按照从大到小排序

/*var arr = [1,2,3,4,5,6];
arr.splice(2,1,9);
console.log(arr);*/ //删除某些元素并且替代。