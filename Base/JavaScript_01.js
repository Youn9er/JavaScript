/*alert('哈哈')
var a = 234567;
alert(a);
var a = 2345678;
alert(a);
var a = 'lalala';
if (Boolean(a)){
    console.log(Boolean(a));
}else {
    console.log(Boolean(a));
}
var str = '1a2541dsfd';
var str2 = '251.1542fds2354dfsf';
console.log(parseInt(str));
console.log(parseFloat(str2));*/
var b = 6;
var a = 3;
console.log(b);
b+=a;
console.log(b);
b-=a;
console.log(b);
b*=a;
console.log(b);
b/=a;
console.log(b);
var c = 5;
var d = '5';
console.log(c==d);
console.log(c!=d);
console.log(c===d);
console.log(c!==d);
var y = 6;
var z = 7;
var yz = 9;
if (y>z){
    console.log('right');
}else{
    console.log('wrong');
}
if (y>z&&z>yz){
    console.log('right');
}else{
    console.log('wrong');
}
if (y>z||z>yz||z>y){
    console.log('right');
}else{
    console.log('wrong');
}
y>z?console.log('right'):console.log('wrong');