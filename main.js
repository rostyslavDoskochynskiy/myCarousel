var slide = document.getElementsByClassName("img");
var shift = 1;

var count = setInterval(function (){
    slide[shift].style.marginLeft = -300 + "px";
    slide[shift].style.zIndex = shift;
    shift++;
    if (shift>slide.length-1){
           clearInterval(count);
    }

},1000);
