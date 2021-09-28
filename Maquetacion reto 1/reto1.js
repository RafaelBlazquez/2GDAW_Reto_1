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
        /*document.getElementById('tablainfo').style.opacity = 0 ;*/
        datosActivo=false;
        document.getElementById("datos").style.backgroundColor="red";
        document.getElementById("datos").style.boxShadow="0px 0px 5px red";
        document.getElementById("chartContainer").style.opacity=0;
    }else{
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 50+"%";
        datosbt.style.width = 50 + "%";
        datosActivo=true;
        document.getElementById("datos").style.backgroundColor="rgb(106, 255, 47)";
        document.getElementById("datos").style.boxShadow="0px 0px 5px rgb(106, 255, 47)";
        document.getElementById("chartContainer").style.opacity=1;
        /*document.getElementById('tablainfo').style.opacity = 1 ;*/
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
        document.getElementById("animacion").style.backgroundColor="red";
        document.getElementById("animacion").style.boxShadow="0px 0px 5px red";
        animacionActivo=false;
    }else{
        datosbt=document.getElementById("left");
        animacionbt=document.getElementById('right');
        animacionbt.style.width = 50 + "%";
        datosbt.style.width= 50 + "%";
        document.getElementById("animacion").style.backgroundColor="rgb(106, 255, 47)";
        document.getElementById("animacion").style.boxShadow="0px 0px 5px rgb(106, 255, 47)";
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



/*GRAFICO*/
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        zoomEnabled: true, 
        with:2000,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Gráfico Chocolates"
        },
          axisY: {
          includeZero: true
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
              indexLabelFontSize: 16,
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 10, y: 71 },
                { x: 50, y: 92, indexLabel: "Valor Max." },
                { x: 60, y: 68 },
                { x: 70, y: 38 },
                { x: 130, y: 21, indexLabel: "Valor Min." }
            ]
        }]
    });
    chart.render();
    
}    



