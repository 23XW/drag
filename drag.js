function drag(id){
    var obj=document.getElementById(id);
    var disX=0;
    var disY=0;
    obj.onmousedown =function (ev) {

        disX=ev.pageX-obj.offsetLeft;
        disY=ev.pageY-obj.offsetTop;

        document.onmousemove = function (ev) {
            obj.style.left=ev.pageX-disX+"PX";
            obj.style.top=ev.pageY-disY+"PX";
        };
        document.onmousmove=function () {
            document.onmousemove=null;
            document.onmouseup=null;

        }
    }
return false;
}