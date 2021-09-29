var style = window.document.styleSheets[0];
var posX1 = true;
var posX2 = false;
var posX3 = false;

var currentY = 0;
var sensor = false;
var movimiento = false;
var posicionOBJN = 0;
var circulosNegros = [document.getElementById('unouno'),document.getElementById('unodos'),document.getElementById('unotres'),document.getElementById('unocuatro'),document.getElementById('unocinco')];
console.log(circulosNegros);
var posicionOBJB = 0;
var circulosBlancos = [document.getElementById('dosuno'),document.getElementById('dosdos'),document.getElementById('dostres'),document.getElementById('doscuatro'),document.getElementById('doscinco')];
console.log(circulosBlancos);
var txokCogido = false;
var arrayBlancos =['uno-blanco','dos-blanco','tres-blanco','cuatro-blanco','cinco-blanco'];
var arrayNegros =['uno-negro','dos-negro','tres-negro','cuatro-negro','cinco-negro'];
var tiempoTranscurrido =0;
window.onload =  empezar();
var contador=0;
console.log(contador);


function empezar(){
  var valvula = document.getElementById('valvula');

  mirarColor();
  


  //condicion para saber si la valvula esta sobre el sensor
  posX2=true;
  sensor=true;
  var truefalse=[0,0,1,1,0,1,1,0,1,0];
  if(posX2){
    //condicion para saber el dato que nos ha devuelto el sensor
    console.log(truefalse);
    if(truefalse[contador]==0){
      
      contador++;
      console.log(contador);
      window.setTimeout(siguienteBlanco, 3000);
      
    }
    else{
      contador++;
      console.log(contador);
      window.setTimeout(siguienteNegro, 3000);
      
    }
    
  }

}
function mirarColor(){
  valvula.style.animationName = 'mirarColor';
  valvula.style.animationDuration  ='3s';
}
function siguienteBlanco(){
  valvula.style.animationName =arrayBlancos[posicionOBJB];
  valvula.style.animationDuration  ='10s';
  window.setTimeout(cambiarColorBlanco, 5000);
}
function siguienteNegro(){
  valvula.style.animationName =arrayNegros[posicionOBJN];
  valvula.style.animationDuration  ='10s';
  window.setTimeout(cambiarColorNegro, 5000);
}
function cambiarColorBlanco(){
  circulosBlancos[posicionOBJB].style.background = 'white';
  posicionOBJB++;
  
  if(posicionOBJB<=4)
  window.setTimeout(empezar, 5000);

}

function cambiarColorNegro(){
  circulosNegros[posicionOBJN].style.background = 'black';
  posicionOBJN++;
  
  if(posicionOBJN<=4)
  window.setTimeout(empezar, 5000);
}

