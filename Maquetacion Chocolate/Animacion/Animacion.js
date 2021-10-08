var style = window.document.styleSheets[0];
var circulosNegros = [document.getElementById('unouno'),document.getElementById('unodos'),document.getElementById('unotres'),document.getElementById('unocuatro'),document.getElementById('unocinco')];
var posicionOBJN = 0;
var circulosBlancos = [document.getElementById('dosuno'),document.getElementById('dosdos'),document.getElementById('dostres'),document.getElementById('doscuatro'),document.getElementById('doscinco')];
var posicionOBJB = 0;
var arrayBlancos =['uno-blanco','dos-blanco','tres-blanco','cuatro-blanco','cinco-blanco'];
var arrayNegros =['uno-negro','dos-negro','tres-negro','cuatro-negro','cinco-negro'];
var contador=0;
var contadorpreguntas=0;

  var equis;
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
  var grafico1 = document.getElementById("columnchart_values");
  var grafico2 = document.getElementById("hiddeninfo");
  var posX1;
  var posX2;
  var posX3;
  var movimiento;
  var currentpY;
  var txokCogido;
  var luzAmarilla;
  var luzRoja;
  var luzAzul;
  var luzVerde;
  var marcaBlanco;
  var marcaNegro;
  var chocolate;
  var valvula; 
//empieza aqui:
window.onload = empezar();
  
function empezar(){
	 
    //Recogida de variables
	$(document).ready(function(){
            
        setInterval(function() {
			
            $.get("leerVariables.html", function(result){
				      console.log(result);
                $('#posX1').text(result.trim());
                var datos=result;
                var arrayDatos=datos.split(' ');
                console.log(arrayDatos);
                var currentpY = arrayDatos[0];
                var posX1 = arrayDatos[1];
                var posX2 = arrayDatos[2];
                var posX3 = arrayDatos[3];
                var movimiento = arrayDatos[4];
                var txokCogido = arrayDatos[5];
                var luzAmarilla = arrayDatos[6];
                var luzRoja = arrayDatos[7];
                var luzAzul = arrayDatos[8];
                var luzVerde = arrayDatos[9];
                var marcaBlanco = arrayDatos[10];
                var marcaNegro = arrayDatos[11];

                console.log('currentpY: '+ currentpY)
                console.log('posX1: '+ posX1);
                console.log('posX2: '+ posX2);
                console.log('posX3: '+ posX3);
                console.log('movimiento: '+ movimiento);
                console.log('txokCogido: '+ txokCogido);
                console.log('luzAmarilla: '+ luzAmarilla);
                console.log('luzRoja: '+ luzRoja);
                console.log('luzAzul: '+ luzAzul);
                console.log('luzVerde: '+ luzVerde);
                console.log('marcaBlanco: '+ marcaBlanco);
                console.log('marcaNegro: '+ marcaNegro);
            });
        },1000);
        });
       
      apareceValvula();
      actualizaciones();
}
        //Variables de prueba
      function apareceValvula(){
        chocolate = document.getElementById('chocolate');
        chocolate.style.visibility = 'hidden';
        chocolate.style.background = 'rgb(80, 76, 76)';
        valvula = document.getElementById('valvula');
        valvula.style.visibility = 'visible';
        chocolate.style.marginTop= '0%';
        chocolate.style.marginLeft='82%';
}
function actualizaciones(){
      /*setInterval(posicionesX(),1000); 
      setInterval(actualizarGrafico1(),1000);
      setInterval(actualizarGrafico2(),1000);*/
      setInterval(actualizarLuces(),1000);
      setInterval(actualizarLeds(),1000);
      setInterval(actualizarTabla(),1000);
  }
    
function iniciarCiclo(){
    //mover valvula hasta el sensor
      irSensor();
       //recibir datos sensor

       if(marcaBlanco){
        contador++;
        window.setTimeout(siguienteBlanco, 3000);
        window.setTimeout(transparente, 8000);
        valvula.style.visibility= 'visible';
       }
       else{
       if(marcaNegro){
        contador++;
        window.setTimeout(siguienteNegro, 3000);
        window.setTimeout(transparente, 8000);
        valvula.style.visibility= 'visible';
       }
      }
}

function irSensor(){
    chocolate.style.animationName = 'irSensor';
    chocolate.style.animationDuration  ='3s';
}

function siguienteBlanco(){
    chocolate.style.animationName =arrayBlancos[posicionOBJB];
    chocolate.style.animationDuration  ='10s';
    chocolate.style.background = 'wheat';
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
    chocolate.style.animationName =arrayNegros[posicionOBJN];
    chocolate.style.animationDuration  ='10s';
    chocolate.style.background = 'rgb(100, 70, 40)';
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
    chocolate.style.visibility = 'hidden';
}

function noTransparente(){
    chocolate.style.visibility = 'visible';
}

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

function iniciar(){
  $("#iniciarbtn")

  document.getElementById('iniciarbtn').style.background='radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)';
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if(luzAmarilla){
    apagarLuces('amarillo');
    encenderLuces('verde');
    document.getElementById("iniciarbtn").style.background="radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)";
    noTransparente();
    window.setTimeout(deshabilitarIniciarBtn,100);
    iniciarCiclo();
  
  if(luzAmarilla) 
  window.setTimeout(habilitarIniciarBtn,13000);
  
  }
  else{
    window.setTimeout(empezar,3000);
    contadorpreguntas++;
  }
}

function deshabilitarIniciarBtn(){
  document.getElementById("iniciarbtn").style.background=" radial-gradient(circle, rgba(0,87,87,1) 0%, rgba(50,50,50,1) 100%)";
  document.getElementById("iniciarbtn").style.visibility	='hidden';
}

function habilitarIniciarBtn(){
  document.getElementById("iniciarbtn").style.background=" radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)";
  document.getElementById("iniciarbtn").style.visibility	='visible';
  apagarLuces('verde');
  encenderLuces('amarillo');
}

function actualizarLuces(){
  if(luzRoja){
    encenderLuces('rojo');
  }
  else{
    apagarLuces('rojo');
  }
  if(luzAmarilla){
    encenderLuces('amarillo');
  }
  else{
    apagarLuces('amarillo');
  }
  if(luzVerde){
    encenderLuces('verde');
  }
  else{
    apagarLuces('verde');
  }
  if(luzAzul){
    encenderLuces('azul');
  }
  else{
    apagarLuces('azul');
  }
}

function actualizarLeds(){
  if(movimiento){
    encenderLed('ledMovimiento');
  }
  else{
    apagarLed('ledMovimiento');
  }
  if(txokCogido){
    encenderLed('ledValvula');
  }
  else{
    apagarLed('ledValvula');
  }
  if(marcaBlanco || marcaNegro){
    encenderLed('ledSensor');
  }
  else{
    apagarLed('ledSensor');
  }
}
function actualizarTabla(){
  posicionY.innerHTML = currentpY;
	
  if(posX1){
    encenderLed('ledPos1');
  }
  else{
    apagarLed('ledPos1');
  }
  if(posX2){
    encenderLed('ledPos2');
  }
  else{
    apagarLed('ledPos2');
  }
  if(posX3){
    encenderLed('ledPos3');
  }
  else{
    apagarLed('ledPos3');
  }
  posOBJB.innerHTML = posicionOBJB;
  posOBJN.innerHTML = posicionOBJN;
}


function fajax(){
  $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize()
  });
  return false;
}

$(document).ready(function(){
  $("#formulario").submit(function(){
    fajax();
 
  });

  $("#formulario").click(function(){
    fajax();
    iniciar();
  });
  
});
