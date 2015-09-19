$(function(){

var objFirebase = new Firebase("https://chatucc.firebaseio.com/");
	$('input[type=submit]').click(clickEnvio);
		
	

	function clickEnvio(){
		var mensaje = $('#inMensaje').val();
		
		objFirebase.push({
           autor: "CindyB",
           mensaje: mensaje,
        
  }); 
		console.log(mensaje);
	}

	objFirebase.on("child_added", function(data){
		var registro = data.val();
		$('.cont-mensajes-timeline').prepend(getPantilla(registro.autor,registro.mensaje));
	});

	function getPantilla(autor,mensaje){
		var plantilla = '<div class="cont-mensajes-mensaje">\
		<label for="" id="lblmensaje">'+autor +'-->'+ mensaje + '</label> \
		</div>';

		return plantilla;
	}
});