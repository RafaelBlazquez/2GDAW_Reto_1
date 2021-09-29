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

var tiempoTranscurrido =0;
window.onload =  empezar();


function empezar(){
  console.log('empezamos')
  var valvula = document.getElementById('valvula');
  console.log(valvula);
  valvula.style.animationName = 'mirarColor';
  valvula.style.animationDuration  ='3s';
  tiempoTranscurrido = tiempoTranscurrido +3;
  console.log(valvula.getAnimations()[0]);

  //condicion para saber si la valvula esta sobre el sensor
  posX2=true;
  sensor=true;
  
  if(posX2){
    //condicion para saber el dato que nos ha devuelto el sensor
    if(sensor){
      //añadir animacion a cola (array de animaciones)
      window.setTimeout(primerblanco, 3000);
      
      window.setTimeout(cambiarColorBlanco, 8000);
      console.log(valvula.getAnimations());
      
    }
    else{
      valvula.style.animationName = valvula.getAnimations()[0].animationName +',uno-negro';
      valvula.style.animationDuration  ='10s';
      valvula.style.animationDelay = tiempoTranscurrido +'s';
      window.setTimeout(cambiarColorNegro, 8000);
      
    }
    tiempoTranscurrido += 10;
  }
}

function cambiarColorBlanco(){
  circulosBlancos[posicionOBJB].style.background = 'white';
  posicionOBJB++;
}

function cambiarColorNegro(){
  circulosNegros[posicionOBJN].style.background = 'black';
  posicionOBJN++;
}

function primerblanco(){
  valvula.style.animationName ='uno-blanco';
  valvula.style.animationDuration  ='10s';
}
