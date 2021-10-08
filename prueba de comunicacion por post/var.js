

window.onload = funcion();

function funcion() {
	setInterval(function() {
			
            $.get("leerVariables.html", function(result){
				console.log(result);
                $('#posX1').text(result.trim());
                var datos=result;
                var arrayDatos=datos.split(' ');
                console.log(arrayDatos);
                var currentpY = arrayDatos[0];
                var posX1 = arrayDatos[7];
                var posX2 = arrayDatos[8];
                var posX3 = arrayDatos[9];
                console.log('posX1: '+ posX1);
                console.log('posX2: '+ posX2);
                console.log('posX3: '+ posX3);
            });
        },1000);
}
