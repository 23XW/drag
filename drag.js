function drag(id){
    var obj=document.getElementById(id);t
    var a=0;
    var b=0;
    obj.onmousedown=function (ev) {

        disX=ev.pageX-obj.offsetLeft;
        disY=ev.pageY-obj.offsetLeft;
        document.onmousemove=function (ev) {
            obj.style.left=ev.pageX-disX+'PX';
            obj.style.top=ev.pageY-disY+'PX';

        }
        
    }

}