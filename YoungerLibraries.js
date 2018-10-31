// 函数库（重要）：

//一：回到顶部函数（滚动函数），接受两个参数：1.obj需要点击的按钮（必填），2.速度（可选），默认为4，数值越大速度越慢
function BackToTop(obj,speed) {
    var timer = null; /*考虑到js的作用域问题，在最外层先声明计时器*/
    var isSys = true;
    var oSpeed = 4;
    if(speed){
        oSpeed = speed;
    }
    window.onscroll=function(){
        if(!isSys){
            clearInterval(timer); /*页面滚动正在滚动，当用户操作时停止滚动*/
        }
        isSys = false;
    };
    obj.onclick=function() {
        timer =setInterval(function(){
            var oscrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            var iSpeed = oscrollTop/oSpeed;
            isSys = true;
            if (oscrollTop<=0){
                window.clearInterval(timer);
            }
            document.documentElement.scrollTop=document.body.scrollTop = oscrollTop-iSpeed;
        },40)
    }
}

//二：获取元素样式函数，两个参数：1.obj（必填），对象；2.attr（必填），样式。
function getStyle(obj,attr) {
    if (obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];  /* obj.getComputedStyle(obj).width：获取样式*/
    }                                 /*obj.currentStyle（ie浏览器）和obj.getComputedStyle（主流）做兼容*/
}

//三：拖拽函数，接受两个参数:1.dragObj要拖拽的对象；2.moveObj被移动的对象。
function drag(dragObj,moveObj){
    moveObj.style.position='absolute'; //给要移动的对象添加定位属性
    dragObj.onmousedown=function(e) {
        var e=e||event;   //做兼容
        var hX=e.clientX-moveObj.offsetLeft;
        var hY=e.clientY-moveObj.offsetTop;  //鼠标当前位置与moveObj的位置之差

        var maxX = document.documentElement.clientWidth-moveObj.offsetWidth;
        var maxY = document.documentElement.clientHeight-moveObj.offsetHeight;  //移动的最大值
        document.onmousemove=function(e){
            var e=e||event;  //做兼容
            var x=e.clientX-hX;
            var y=e.clientY-hY;  //moveObj的上、左坐标
            if(x<=0){
                x=0;
            }else if(x>=maxX){
                x=maxX;
            }
            if(y<=0){
                y=0;
            }else if(y>=maxY){
                y=maxY;
            }  //做判断，保证moveObj在浏览器视窗内
            moveObj.style.left=x+'px';
            moveObj.style.top=y+'px';  //moveObj的上、左位置
        };
        document.onmouseup=function(){
            document.onmousemove=null;  //鼠标抬起后位置确定，终止鼠标移动事件
        }
    }
}

//四：随机颜色函数。（多用于改变背景颜色）
function getRandomColor() {
    var str='0123456789abcdef';
    var color='#';
    for(var i=0;i<6;i++){
        color+=str[Math.floor(Math.random()*16)]
    }
    return color;
}

//五：查询数组中是否存在某一元素；两个参数;1.arr（被查询的数组，必填），2.target（要查询的元素，必填）。若存在返回该元素在数组中的位置，若不存在返回-1。
function FindTarget(arr,target){
    var final = -1;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==target){
            final=i;
            break;
        }else{
            final=-1;
        }
    }
    return final;
}

//六：cookie函数。cookie需要在服务器上运行。但火狐浏览器可以使用本地cookie！
// 1：setCookie()，接受三个参数：name名称、value值、iDay保存时长。
function setCookie(name, value, iDay)
{
    var oDate=new Date();               //获得当前时间

    oDate.setDate(oDate.getDate()+iDay);    //到期时间

    document.cookie=name+'='+value+';expires='+oDate;
}
//2.getCookie函数。接收一个参数：name名称
function getCookie(name)
{
    var arr=document.cookie.split('; '); //.split分割
    var i=0;
    for(i=0;i<arr.length;i++)
    {
        var arr2=arr[i].split('=');

        if(arr2[0]==name)
        {
            return arr2[1];
        }
    }
    return '';
}
//3.移除cookie：接收一个参数name名
function removeCookie(name)
{
    setCookie(name, '1', -1);
}

//七：ajax：接收三个参数，地址URL、请求成功函数fnSucc、请求失败函数fnFaild
function ajax(url, fnSucc, fnFaild)
{
    var oAjax=null;

    if(window.XMLHttpRequest)
    {
        oAjax=new XMLHttpRequest();
    }
    else
    {
        oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }

    oAjax.open('GET', url, true);

    oAjax.send();

    oAjax.onreadystatechange=function ()
    {
        if(oAjax.readyState==4)
        {
            if(oAjax.status==200)
            {
                fnSucc(oAjax.responseText);
            }
            else
            {
                if(fnFaild)
                {
                    fnFaild();
                }
            }
        }
    };
}