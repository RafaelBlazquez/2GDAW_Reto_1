var datosbt;
var animacionbt
var datosActivo=true;
var animacionActivo=true;
var graficoPos = true;


function datosF(){
    if(datosActivo==true && animacionActivo==true){
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 100+"%";
        datosbt.style.width = 0 + "%";
        datosActivo=false;
        document.getElementById("Bdatos").style.backgroundColor="red";
        document.getElementById("Bdatos").style.boxShadow="0px 0px 5px red";
        document.getElementById("columnchart_values").style.opacity=0;
        var tabla = document.getElementsByClassName("styled-table");
        document.getElementById("Banimacion").disabled=true;
        tabla[0].style.opacity=0;
    }else{
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 50+"%";
        datosbt.style.width = 50 + "%";
        datosActivo=true;
        document.getElementById("Bdatos").style.backgroundColor="rgb(106, 255, 47)";
        document.getElementById("Bdatos").style.boxShadow="0px 0px 5px rgb(106, 255, 47)";
        document.getElementById("columnchart_values").style.opacity=1;
        var tabla = document.getElementsByClassName("styled-table");
        document.getElementById("Banimacion").disabled=false;
        tabla[0].style.opacity=1;
    }

}

document.addEventListener("DOMContentLoaded", animacionF);

function animacionF(){
    console.log("AAKJFDNSF")
    if(datosActivo==true && animacionActivo==true){
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 0 + "%";
        datosbt.style.width= 100 + "%";
        document.getElementById("Banimacion").style.backgroundColor="red";
        document.getElementById("Banimacion").style.boxShadow="0px 0px 5px red";
        document.getElementById("hiddeninfo").style.opacity=1;
        document.getElementById("Bdatos").disabled=true;
        animacionActivo=false;
    }else{
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 50+"%";
        datosbt.style.width = 50 + "%";
        document.getElementById("Banimacion").style.backgroundColor="rgb(106, 255, 47)";
        document.getElementById("Banimacion").style.boxShadow="0px 0px 5px rgb(106, 255, 47)";
        document.getElementById("hiddeninfo").style.opacity=0; 
        document.getElementById("Bdatos").disabled=false;
        animacionActivo=true;
    }
}

function cambiarGraficos() {
    if (graficoPos) {
        document.getElementById("columnchart_values").style.opacity = "0";
        document.getElementById("hiddeninfo").style.opacity = "1";
        graficoPos = false;
    }
    else {
        document.getElementById("columnchart_values").style.opacity = "1";
        document.getElementById("hiddeninfo").style.opacity = "0";
        graficoPos = true;
    }
}

document.getElementById("iniciarbtn").addEventListener('click', function(){
document.getElementById("iniciarbtn").style.background="radial-gradient(circle, rgba(7,255,2,1) 38%, rgba(15,117,20,1) 92%)";
});
document.getElementById("botonMostrar").addEventListener("click",cambiarGraficos);



