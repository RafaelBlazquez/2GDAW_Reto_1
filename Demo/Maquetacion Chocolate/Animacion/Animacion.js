var style = window.document.styleSheets[0];
var posX1 = true;
var posX2 = false;
var posX3 = false;

var currentY = document.getElementById('currentY');

var circulosNegros = [document.getElementById('unouno'),document.getElementById('unodos'),document.getElementById('unotres'),document.getElementById('unocuatro'),document.getElementById('unocinco')];
var posicionOBJN = 0;


var circulosBlancos = [document.getElementById('dosuno'),document.getElementById('dosdos'),document.getElementById('dostres'),document.getElementById('doscuatro'),document.getElementById('doscinco')];
var posicionOBJB = 0;

var txokCogido = false;
var arrayBlancos =['uno-blanco','dos-blanco','tres-blanco','cuatro-blanco','cinco-blanco'];
var arrayNegros =['uno-negro','dos-negro','tres-negro','cuatro-negro','cinco-negro'];
var contador=0;
var contadorpreguntas=0;
var truefalse=[0,0,1,1,0,1,1,0,1,0];
var rojo =document.getElementById('rojo');
var amarillo =document.getElementById('amarillo');
var verde =document.getElementById('verde');
var azul =document.getElementById('azul');  
var ledMovimiento = document.getElementById('ledMovimiento');  
var ledValvula = document.getElementById('ledValvula');  
var ledSensor = document.getElementById('ledSensor');  
var posicionY = document.getElementById('posicionY'); 
var ledPos1 = document.getElementById('ledPosX1');  
var ledPos2 = document.getElementById('ledPosX2');  
var ledPos3 = document.getElementById('ledPosX3');  
var posOBJB = document.getElementById('posOBJB');  
var posOBJN = document.getElementById('posOBJN');

//empieza aqui:
  window.onload = transparente();
  window.onload = leds('none');
  function empezar(){
    
    window.setTimeout(apagarLuces('amarillo'),13000);
    var movimiento = document.getElementById('movimiento');
    noTransparente();
    movimiento.style.background = 'rgb(80, 76, 76)';
    var valvula = document.getElementById('valvula');
    movimiento.style.marginTop= '0%';
    movimiento.style.marginLeft='82%';
    //condicion para saber si la valvula esta al inicio
    /*Datos de prueba*/
    posX3=true;
    currentY=5;
    if(posX3 && currentY ==5){
       //mover valvula hasta el sensor
       
       window.setTimeout(encenderLuces('verde'),1000);

       irSensor();
      //condicion para saber si la valvula esta en el sensor
      /*Datos de prueba*/
      posX2=true;
      currentY=2;
      if(posX2 && currentY ==2){
        //recibir datos sensor
        /*truefalse y contador --> Datos de prueba*/
        resultadoSensor= truefalse[contador];
        if(resultadoSensor==0){
          contador++;
          window.setTimeout(siguienteBlanco, 3000);
        }
        else{
          contador++;
          console.log(contador);
          window.setTimeout(siguienteNegro, 3000);

          
        }
        window.setTimeout(transparente,8000);
        valvula.style.visibility= 'visible';
      }
    }
    else{
      window.setTimeout(empezar,500);
      contadorpreguntas++;
    }
    
  
  


}
function apareceValvula(){
  chocolate = document.getElementById('chocolate');
  chocolate.style.visibility = 'hidden';
  chocolate.style.background = 'rgb(80, 76, 76)';
  valvula = document.getElementById('valvula');
  valvula.style.visibility = 'visible';
  chocolate.style.marginTop= '0%';
  chocolate.style.marginLeft='82%';
}

function leds(modo){
  switch(modo){
    case 'none':
    apagarLed('ledMovimiento');
    apagarLed('ledSensor');
    apagarLed('ledValvula');
    break;
    case 'm':
    encenderLed('ledMovimiento');
    apagarLed('ledSensor');
    apagarLed('ledValvula');
    break;

    case 'sv':
    apagarLed('ledMovimiento');
    encenderLed('ledSensor');
    encenderLed('ledValvula');
    break;

    case 'mv':
    encenderLed('ledMovimiento');
    apagarLed('ledSensor');
    encenderLed('ledValvula');
    break;

  }
  
}
function iniciar(){
    
    empezar();
}

function transparente(){
  movimiento.style.visibility = 'hidden';
}
function noTransparente(){
    movimiento.style.visibility = 'visible';
}
  
function irSensor(){
    movimiento.style.animationName = 'irSensor';
    movimiento.style.animationDuration  ='3s';
   
  }

  function siguienteBlanco(){
    movimiento.style.animationName =arrayBlancos[posicionOBJB];
    movimiento.style.animationDuration  ='10s';
    movimiento.style.background = 'wheat';
    window.setTimeout(cambiarColorBlanco, 5000);
  }

  function cambiarColorBlanco(){
    circulosBlancos[posicionOBJB].style.background = 'wheat';
    posicionOBJB++;
    if(contador<=9){
      window.setTimeout(empezar, 5000);
    }
  
}

  function siguienteNegro(){
    movimiento.style.animationName =arrayNegros[posicionOBJN];
    movimiento.style.animationDuration  ='10s';
    movimiento.style.background = 'rgb(100, 70, 40)';
    window.setTimeout(cambiarColorNegro, 5000);
  }

  function cambiarColorNegro(){
    circulosNegros[posicionOBJN].style.background = 'rgb(100, 70, 40)';
    posicionOBJN++;
    
    if(contador<=9){
    window.setTimeout(empezar, 5000);
    }
  }
  function transparente(){
    movimiento.style.visibility = 'hidden';
  }

//Programacion de las luces de colores
/**/ 

function encenderLuces(color){
  
  switch(color){
      case 'rojo':
        rojo.style.background = ' radial-gradient(circle, rgb(255, 2, 2) 38%, rgb(117, 15, 15) 92%)';
        rojo.style.boxShadow = ' 0 0 5px rgb(197, 6, 6)';
        break;
      case 'amarillo':
          amarillo.style.background = 'radial-gradient(circle, rgb(255, 238, 2) 38%, rgb(117, 107, 15) 92%)';
          amarillo.style.boxShadow = '0 0 5px rgb(197, 194, 6)';
          break;
      case 'verde':
        verde.style.background = 'radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)';
        verde.style.boxShadow = '0 0 5px rgb(9, 197, 6)';
        break;
      case 'azul':
        azul.style.background = 'radial-gradient(circle, rgb(2, 69, 255) 38%, rgb(15, 17, 117) 92%)';
        azul.style.boxShadow = '0 0 5px rgb(9, 6, 197)';
        break;
  }
}

function encenderLed(cual){

switch(cual){
    case 'ledMovimiento':
      ledMovimiento.style.background = 'radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)';
      ledMovimiento.style.boxShadow = '0 0 5px rgb(9, 197, 6)';
      break;
    case 'ledValvula':
      ledValvula.style.background = 'radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)';
      ledValvula.style.boxShadow = '0 0 5px rgb(9, 197, 6)';
      break;
    case 'ledSensor':
      ledSensor.style.background = 'radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)';
      ledSensor.style.boxShadow = '0 0 5px rgb(9, 197, 6)';
      break;
    case 'ledPos1':
      ledPos1.style.background = 'radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)';
      ledPos1.style.boxShadow = '0 0 5px rgb(9, 197, 6)';
      break;
    case 'ledPos2':
      ledPos2.style.background = 'radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)';
      ledPos2.style.boxShadow = '0 0 5px rgb(9, 197, 6)';
      break;
    case 'ledPos3':
      ledPos3.style.background = 'radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)';
      ledPos3.style.boxShadow = '0 0 5px rgb(9, 197, 6)';
      break;
}
}

function apagarLuces(color){
switch(color){
    case 'rojo':
        rojo.style = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
        break;
    case 'amarillo':
        amarillo.style = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
        break;
    case 'verde':
         verde.style = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
        break;
    case 'azul':
        azul.style = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
        break;
}
}

function apagarLed(cual){

switch(cual){
    case 'ledMovimiento':
      ledMovimiento.style.background = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
      ledMovimiento.style.boxShadow = '0 0 0px rgb(9, 197, 6)';
      break;
    case 'ledValvula':
      ledValvula.style.background = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
      ledValvula.style.boxShadow = '0 0 0px rgb(9, 197, 6)';
      break;
    case 'ledSensor':
      ledSensor.style.background = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
      ledSensor.style.boxShadow = '0 0 0px rgb(9, 197, 6)';
      break;
    case 'ledPos1':
      ledPos1.style.background = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
      ledPos1.style.boxShadow = '0 0 0px rgb(9, 197, 6)';
      break;
    case 'ledPos2':
      ledPos2.style.background = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
      ledPos2.style.boxShadow = '0 0 0px rgb(9, 197, 6)';
      break;
    case 'ledPos3':
      ledPos3.style.background = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
      ledPos3.style.boxShadow = '0 0 0px rgb(9, 197, 6)';
      break;
}
}
