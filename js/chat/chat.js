$(function(){

var objFirebase = new Firebase("https://chatucccbps.firebaseio.com/");
	$('input[type=submit]').click(clickEnvio);
		
	

	function clickEnvio(){
		var mensaje = $('#inMensaje').val();
		
		var currentdate = new Date();

    var datetime = currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
		objFirebase.push({
           autor: "CindyB",
           id: 2,
           mensaje: mensaje,
           hora: datetime,
        
  }); 
		console.log(mensaje);
	}

	objFirebase.on("child_added", function(data){
		var registro = data.val();
		$('.cont-mensajes-timeline').prepend(getPantilla(registro.autor,registro.mensaje,registro.id,registro.hora));
	});

	function getPantilla(autor,mensaje,id,hora){

		/*var plantilla = '<center><div class="cont-mensajes-mensaje">\
		<label for="" id="lblmensaje">'+autor +'-->'+ mensaje + '</label> \
		</div></center>';

		return plantilla;*/
		var mensajes = mensaje;
		var emo= mensajes.replace(":)", '<img class="izquierda"/>');
		var emo= emo;
		var emo= emo.replace(":(", '<img class="izquierda" />');

		if(id!=2){
		var plantilla = '<center><div class="chat-bubble">\
                  <span class="span-mensaje">'+ emo + '</span>\
                    <span class="span-hora">'+ hora + '</span>\
                   <div class="chat-bubble-arrow-border"></div>\
                   <div class="chat-bubble-arrow"></div>\
            </div></center>';
        }
        else{
        	var plantilla = '<center><div class="chat-bubble-right">\
                  <span class="span-mensaje-right">'+ emo + '</span>\
                    <span class="span-hora-right">'+ hora + '</span>\
                   <div class="chat-bubble-arrow-border-right"></div>\
                   <div class="chat-bubble-arrow-right"></div>\
            </div></center>';
        }
        return plantilla;
	}
});