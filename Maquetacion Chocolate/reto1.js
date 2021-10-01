var datosbt;
var animacionbt
var datosActivo=true;
var animacionActivo=true;


function datosF(){
    if(datosActivo==true && animacionActivo==true){
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 100+"%";
        datosbt.style.width = 0 + "%";
        datosActivo=false;
        document.getElementById("datos").style.backgroundColor="red";
        document.getElementById("datos").style.boxShadow="0px 0px 5px red";
        document.getElementById("columnchart_values").style.opacity=0;
        var tabla = document.getElementsByClassName("styled-table");
        tabla[0].style.opacity=0;
    }else{
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 50+"%";
        datosbt.style.width = 50 + "%";
        datosActivo=true;
        document.getElementById("datos").style.backgroundColor="rgb(106, 255, 47)";
        document.getElementById("datos").style.boxShadow="0px 0px 5px rgb(106, 255, 47)";
        document.getElementById("columnchart_values").style.opacity=1;
        var tabla = document.getElementsByClassName("styled-table");
        tabla[0].style.opacity=1;
    }

    /*if(datosActivo==true && animacionActivo==false){
        alert("datosActivo==true && animacionActivo==false");
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 0 +"%";
        datosbt.style.width = 0 + "%";
        datosActivo=false;
    }

    if(datosActivo==false && animacionActivo==true){
        alert("datosActivo==false && animacionActivo==true");
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 50 + "%";
        datosbt.style.width= 50 + "%";
        datosActivo=true;
    }

    if(datosActivo==false && animacionActivo==false){
        alert("datosActivo==false && animacionActivo==false");
        datos=document.getElementById("left");
        animacion=document.getElementById('right');
        animacion.style.width = 0 + "%";
        datos.style.width = 100 + "%";
        datosActivo=true;
    }*/
}



function animacionF(){
    if(datosActivo==true && animacionActivo==true){
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 0 + "%";
        datosbt.style.width= 100 + "%";
        document.getElementById("animacion2").style.backgroundColor="red";
        document.getElementById("animacion2").style.boxShadow="0px 0px 5px red";

        document.getElementById("hiddeninfo").style.opacity=1;
        document.getElementById("animacion").style.opacity=0;
        animacionActivo=false;
    }else{
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 50 + "%";
        datosbt.style.width= 50 + "%";
        document.getElementById("animacion2").style.backgroundColor="rgb(106, 255, 47)";
        document.getElementById("animacion2").style.boxShadow="0px 0px 5px rgb(106, 255, 47)";
        document.getElementById("hiddeninfo").style.opacity=0;
        document.getElementById("animacion").style.opacity=1;
        animacionActivo=true;
    }

    /*if(datosActivo==false && animacionActivo==true){
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 0 + "%";
        datosbt.style.width= 0 + "%";
        animacionActivo=false;
    }

    if(datosActivo==true && animacionActivo==false){
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 50 + "%";
        datosbt.style.width= 50 + "%";
        animacionActivo=true;
    }

    if(datosActivo==false && animacionActivo==false){
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 100 + "%";
        datosbt.style.width= 0 + "%";
        animacionActivo=true;
    }*/
}


window.addEventListener('click', function(){
document.getElementById("iniciarbtn").style.background="radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)";
});




