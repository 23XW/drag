function drag(id){
    var obj=document.getElementById(id);t
    var a=0;
    var b=0;
    obj.onmousedown=function (ev) {

        disX=ev.pageX-obj.offsetLeft;
        disY=ev.pageY-obj.offsetLeft;

        document.onmousemove=function () {
            obj.style.left=ev.clientX-disX+"PX";
            obj.style.left=ev.clientY-disY+"PX";
        }
        
    }

}