console.log('Loaded!');

var element=document.getElementById('main-text');

element.innerHTML='Hare Krishna';
var img=document.getElementById('hari');
var marginLeft=0;
function moveRight(){
    marginLeft+=10;
    img.style.marginLeft=marginLeft+'px';

}
img.onclick=function(){
   var interval= setInterval(moveRight,100);
};