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
//empieza aqui:
window.onload = empezar();
  
  function empezar(){
  
    var movimiento = document.getElementById('movimiento');
    movimiento.style.visibility = 'visible';
    movimiento.style.background = 'rgb(80, 76, 76)';
    var valvula = document.getElementById('valvula');
    movimiento.style.marginTop= '0%';
    movimiento.style.marginLeft='82%';
    txokCogido=true;
    //Valvula cogiendo == valvula inicio
    if(txokCogido){
       //mover valvula hasta el sensor
       irSensor();
      //condicion para saber si la valvula esta en el sensor
      /*Datos de prueba*/
        //recibir datos sensor

        marcaBlanco=true;
        if(marcaBlanco){
          contador++;
          window.setTimeout(siguienteBlanco, 3000);
          window.setTimeout(transparente,8000);
          valvula.style.visibility= 'visible';
        }
        if(marcaNegro){
          contador++;
          window.setTimeout(siguienteNegro, 3000);
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

//Programacion de las luces de colores
/**/ 
var boolrojo = false;
var boolamarillo = false;
var boolverde = false;
var boolazul = false;

var rojo =document.getElementById('rojo');
var amarillo =document.getElementById('amarillo');
var verde =document.getElementById('verde');
var azul =document.getElementById('azul');
//Funcion que llama a cambiolucescolor 1 parametro
function cambioDeLuces(color){
    switch(color){
        case 'rojo':
            if (boolrojo){
                rojo.style = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
            }
            else{
                rojo.style.background = ' radial-gradient(circle, rgb(255, 2, 2) 38%, rgb(117, 15, 15) 92%)';
                rojo.style.boxShadow = ' 0 0 5px rgb(197, 6, 6)';
            }
            break;

        case 'amarillo':
            if (boolamarillo){
                amarillo.style = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
            }
            else{
                amarillo.style.background = 'radial-gradient(circle, rgb(255, 238, 2) 38%, rgb(117, 107, 15) 92%)';
                amarillo.style.boxShadow = '0 0 5px rgb(197, 194, 6)';
            }
            break;

        case 'verde':
        if (boolverde){
                verde.style = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
            }
            else{
                verde.style.background = 'radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)';
                verde.style.boxShadow = '0 0 5px rgb(9, 197, 6)';
            }
            break;

        case 'azul':
            if (boolazul){
                azul.style = 'radial-gradient(circle, rgba(87,87,87,1) 0%, rgba(50,50,50,1) 100%)';
            }
            else{
                azul.style.background = 'radial-gradient(circle, rgb(2, 69, 255) 38%, rgb(15, 17, 117) 92%)';
                azul.style.boxShadow = '0 0 5px rgb(9, 6, 197)';
            }
            break;
    }
}
