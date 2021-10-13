var style = window.document.styleSheets[0];
//style.insertRule("@keyframes rotar{from{ transform: translate(0%,0%); }to{ transform: translate(0%,50%);}}",9);
console.log(window.document.styleSheets[0]);

var div = document.getElementById('ejemplo');
console.log(div);
div.style.animationName =div.getAnimations()[0].animationName + ',derecha';
div.style.animationDuration = '5s';
console.log(div.getAnimations()[0].animationName);