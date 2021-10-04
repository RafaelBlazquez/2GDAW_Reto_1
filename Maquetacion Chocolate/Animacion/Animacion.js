var style = window.document.styleSheets[0];
var posX1 = true;
var posX2 = false;
var posX3 = false;

var currentY = 0;

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
//empieza aqui:
window.onload = empezar();

  function empezar(){
    var movimiento = document.getElementById('movimiento');
    movimiento.style.visibility = 'visible';
    movimiento.style.background = 'rgb(80, 76, 76)';
    var valvula = document.getElementById('valvula');
    movimiento.style.marginTop= '0%';
    movimiento.style.marginLeft='82%';
    //condicion para saber si la valvula esta al inicio
    /*Datos de prueba*/
    posX3=true;
    currentY=5;
    if(posX3 && currentY ==5){
      //condicion para saber si la valvula esta en el sensor
      /*Datos de prueba*/
      posX2=true;
      currentY=2;
      if(posX2 && currentY ==2){

        //mover valvula hasta el sensor
        irSensor();
        
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


