
<<<<<<< HEAD


var objeto;
	var jsonArr = [];
			var objeto = new Object();

$( document ).ready(function() {
    	$(".avatar-img").click(function(){
		sessionStorage.setItem('user', null);	
location.reload();

	});
});




var auth;
$(function() {
	var objFirebase = new Firebase("https: //chatucccbps.firebaseio.com/");
	$('#normal').click(clickEnvio);
	$('#inMensaje').keyup(function (e) {
		if (e.keyCode == 13) {
			clickEnvio();
		}
	}
	);
	$("#twitter").click(clickTwitter);
	$("#facebook").click(clickFacebook);
	$("#github").click(clickGithub);




	function clickTwitter() {

		objFirebase.authWithOAuthPopup("twitter", function(error, authData) {
			if(error) {
				console.log("mal", error);
			}
			else {

				auth=authData;

				console.log("bien", authData);
				$("#avatar").attr("src", ""+authData.twitter.profileImageURL);
				$(".avatar-chat-right").attr("src", ""+authData.twitter.profileImageURL);
				$("#nombre").append(''+authData.twitter.username);

				$( "#header-avatar" ).animate({ "top": "+=132px" }, "slow",function(){

					$( "#contenido" ).animate({ "left": "+="+$( "#contenido" ).width() }, "slow",function(){
						$( "#contenido" ).remove();

						$('body').append('    <div class="cont-envio">\
							<input id="inMensaje" class="cont-envio-nombre" type="text"></input>\
							<input id="normal" class="cont-envio-submit" type="submit" value="Enviar"></input>\
							</div>');
	
						$( "body" ).append('<section id="contenido" class="contenido-messagges"> <div class="cont-mensajes-timeline-messages"></div><div id="favoritos" class="favoritos"></div> </section>');

						objFirebase.on("child_added", function(data) {
							var registro = data.val();
							$('.cont-mensajes-timeline-messages').append(getPantilla(registro.autor, registro.mensaje, registro.id, registro.hora, registro.imagen));
						});

						$("body").on( 'click', '.cont-envio-submit' , function(){
							var mensaje = $('#inMensaje').val();
							var currentdate = new Date();
							var datetime = currentdate.getHours() + ": " 
							+ currentdate.getMinutes() + ": " + currentdate.getSeconds();
							objFirebase.push( {
								autor: "Fabio", mensaje: mensaje, id : 1, hora: datetime, imagen:""+objeto.imagen,}
								);
							console.log(mensaje);

							$('#inMensaje').val("");
						});			

						$("body").on( 'keyup', '#inMensaje' , function(e){
							if (e.keyCode == 13) {
								clickEnvio();
							}	
						});

						$("body").on( 'click', '.favoritos , .contenido-messagges, .cont-envio, .cont-envio-twitter, .cont-envio-nombre, .cont-envio-submit, .avatar-chat-right' , function(){
							
						}  );

						$( "#contenido, .cont-envio, .center ,.cont-mensajes-timeline-messages " ).fadeIn('slow/1000/fast', function() {
							
						});

					} );

			//	alert(""+authData.twitter.profileImageURL);
			$(".avatar-chat-right").attr("src", ""+authData.twitter.id);

			
			   objeto.id = ""+authData.twitter.id;
			   objeto.nombre  = ""+authData.twitter.displayName;
			   objeto.apodo = ""+authData.twitter.username;
			   objeto.imagen = ""+authData.twitter.profileImageURL;


			   var jsonString= JSON.stringify(objeto);

			sessionStorage.setItem('user', ''+jsonString);	
			$( "#contenido" ).animate({ "left": "+="+$( "#contenido" ).width() });

		} 

		);							  
}
}
);
return 0;
}



$( document ).ready(function() {



  var data = sessionStorage.getItem('user');

  if (data.localeCompare("null")==0){
 console.log("No se tiene informacion almacenada");
  }
  else{
 // var data= clickTwitter();

  objeto = JSON.parse(''+data);

				$("#avatar").attr("src", ""+objeto.imagen);
				$(".avatar-chat-right").attr("src", ""+objeto.imagen);
				$("#nombre").append(''+objeto.nombre);

				$( "#header-avatar" ).animate({ "top": "+=132px" }, "slow",function(){

					$( "#contenido" ).animate({ "left": "+="+$( "#contenido" ).width() }, "slow",function(){
						$( "#contenido" ).remove();

						$('body').append('    <div class="cont-envio">\
							<input id="inMensaje" class="cont-envio-nombre" type="text"></input>\
							<input id="normal" class="cont-envio-submit" type="submit" value="Enviar"></input>\
							</div>');
=======
var objFirebase = new Firebase("https://chatucccbps.firebaseio.com/");
	$('input[type=submit]').click(clickEnvio);
		
>>>>>>> 158d198b452bc599d776c746ca47b1cab77d72ea
	
						$( "body" ).append('<section id="contenido" class="contenido-messagges"> <div class="cont-mensajes-timeline-messages"></div><div id="favoritos" class="favoritos"></div> </section>');

						objFirebase.on("child_added", function(data) {
							var registro = data.val();
							$('.cont-mensajes-timeline-messages').append(getPantilla(registro.autor, registro.mensaje, registro.id, registro.hora, registro.imagen));
						});

						$("body").on( 'click', '.cont-envio-submit' , function(){
							var mensaje = $('#inMensaje').val();
							var currentdate = new Date();
							var datetime = currentdate.getHours() + ": " 
							+ currentdate.getMinutes() + ": " + currentdate.getSeconds();
							objFirebase.push( {
								autor: "Fabio", mensaje: mensaje, id : 1, hora: datetime, imagen:""+objeto.imagen,}
								);
							console.log(mensaje);

							$('#inMensaje').val("");
						});			

						$("body").on( 'keyup', '#inMensaje' , function(e){
							if (e.keyCode == 13) {
								clickEnvio();
							}	
						});

						$("body").on( 'click', '.favoritos , .contenido-messagges, .cont-envio, .cont-envio-twitter, .cont-envio-nombre, .cont-envio-submit, .avatar-chat-right' , function(){
							
						}  );

						$( "#contenido, .cont-envio, .center ,.cont-mensajes-timeline-messages " ).fadeIn('slow/1000/fast', function() {
							
						});

					} );

			//	alert(""+authData.twitter.profileImageURL);
			$(".avatar-chat-right").attr("src", ""+objeto.id);

			

		
<<<<<<< HEAD
			$( "#contenido" ).animate({ "left": "+="+$( "#contenido" ).width() });

		} 

		);	



  }
});


function clickGithub() {
	objFirebase.authWithOAuthPopup("github", function(error, authData) {
		if(error) {
			console.log("mal", error);
		}
		else {
					auth=authData;

				console.log("bien", authData);
				$("#avatar").attr("src", ""+authData.github.profileImageURL);
				$(".avatar-chat-right").attr("src", ""+authData.github.profileImageURL);
				$("#nombre").append(''+authData.github.username);

				$( "#header-avatar" ).animate({ "top": "+=132px" }, "slow",function(){

					$( "#contenido" ).animate({ "left": "+="+$( "#contenido" ).width() }, "slow",function(){
						$( "#contenido" ).remove();

						$('body').append('    <div class="cont-envio">\
							<input id="inMensaje" class="cont-envio-nombre" type="text"></input>\
							<input id="normal" class="cont-envio-submit" type="submit" value="Enviar"></input>\
							</div>');
	
						$( "body" ).append('<section id="contenido" class="contenido-messagges"> <div class="cont-mensajes-timeline-messages"></div><div id="favoritos" class="favoritos"></div> </section>');

						objFirebase.on("child_added", function(data) {
							var registro = data.val();
							$('.cont-mensajes-timeline-messages').append(getPantilla(registro.autor, registro.mensaje, registro.id, registro.hora, registro.imagen));
						});

						$("body").on( 'click', '.cont-envio-submit' , function(){
							var mensaje = $('#inMensaje').val();
							var currentdate = new Date();
							var datetime = currentdate.getHours() + ": " 
							+ currentdate.getMinutes() + ": " + currentdate.getSeconds();
							objFirebase.push( {
								autor: "Fabio", mensaje: mensaje, id : 1, hora: datetime, imagen:"https://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",}
								);
							console.log(mensaje);

							$('#inMensaje').val("");
						});			

						$("body").on( 'keyup', '#inMensaje' , function(e){
							if (e.keyCode == 13) {
								clickEnvio();
							}	
						});

						$("body").on( 'click', '.contenido-messagges, .cont-envio, .cont-envio-twitter, .cont-envio-nombre, .cont-envio-submit, .avatar-chat-right' , function(){
							
						}  );

						$( "#contenido, .cont-envio, .center " ).fadeIn('slow/1000/fast', function() {
							
						});
						
					} );

			//	alert(""+authData.twitter.profileImageURL);
			$(".avatar-chat-right").attr("src", ""+authData.github.profileImageURL);	
			$( "#contenido" ).animate({ "left": "+="+$( "#contenido" ).width() });

		} 

		);	
		}
=======
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
>>>>>>> 158d198b452bc599d776c746ca47b1cab77d72ea
	}
	);
}

<<<<<<< HEAD
function clickFacebook() {
	objFirebase.authWithOAuthPopup("facebook", function(error, authData) {
		if(error) {
			console.log("mal", error);
		}
		else {
					auth=authData;

				console.log("bien", authData);
				$("#avatar").attr("src", ""+authData.twitter.profileImageURL);
				$(".avatar-chat-right").attr("src", ""+authData.twitter.profileImageURL);
				$("#nombre").append(''+authData.twitter.username);

				$( "#header-avatar" ).animate({ "top": "+=132px" }, "slow",function(){

					$( "#contenido" ).animate({ "left": "+="+$( "#contenido" ).width() }, "slow",function(){
						$( "#contenido" ).remove();

						$('body').append('    <div class="cont-envio">\
							<input id="inMensaje" class="cont-envio-nombre" type="text"></input>\
							<input id="normal" class="cont-envio-submit" type="submit" value="Enviar"></input>\
							</div>');
	
						$( "body" ).append('<section id="contenido" class="contenido-messagges"> <div class="cont-mensajes-timeline-messages"></div><div id="favoritos" class="favoritos"></div> </section>');

						objFirebase.on("child_added", function(data) {
							var registro = data.val();
							$('.cont-mensajes-timeline-messages').append(getPantilla(registro.autor, registro.mensaje, registro.id, registro.hora, registro.imagen));
						});

						$("body").on( 'click', '.cont-envio-submit' , function(){
							var mensaje = $('#inMensaje').val();
							var currentdate = new Date();
							var datetime = currentdate.getHours() + ": " 
							+ currentdate.getMinutes() + ": " + currentdate.getSeconds();
							objFirebase.push( {
								autor: "Fabio", mensaje: mensaje, id : 1, hora: datetime, imagen:"https://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png",}
								);
							console.log(mensaje);

							$('#inMensaje').val("");
						});			

						$("body").on( 'keyup', '#inMensaje' , function(e){
							if (e.keyCode == 13) {
								clickEnvio();
							}	
						});



						$("body").on( 'click', '.btn-favoritos , .contenido-messagges, .cont-envio, .cont-envio-twitter, .cont-envio-nombre, .cont-envio-submit, .avatar-chat-right' , function(){
							
						}  );

					} );

			//	alert(""+authData.twitter.profileImageURL);
			$(".avatar-chat-right").attr("src", ""+authData.twitter.profileImageURL);	
			$( "#contenido" ).animate({ "left": "+="+$( "#contenido" ).width() });

		} 

		);	
		}
=======
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
>>>>>>> 158d198b452bc599d776c746ca47b1cab77d72ea
	}
	);
}

$(".btn-favoritos").click(function(){

alert("jaaj	");
});

function clickEnvio() {

	

	var mensaje = $('#inMensaje').val();
	var currentdate = new Date();
	var datetime = currentdate.getHours() + ": " 
	+ currentdate.getMinutes() + ": " + currentdate.getSeconds();
	objFirebase.push( {
		autor: "Fabio", mensaje: mensaje, id : ""+objeto.id, hora: datetime, imagen:""+objeto.imagen,}
		);


	$('#inMensaje').val("");

}

function notify() {
}

	var numeroId=0;

	
	function getPantilla(autor, mensaje, id, hora, imagen) {
    // alert(datetime);
    var mensajes = mensaje;
    var emo= mensajes.replace(": )", '<img class="izquierda" src="../imagenes/feliz.png"/>');
    var emo= emo;
    var emo= emo.replace(": (", '<img class="izquierda" src="../imagenes/triste.png"/>');

    	  jsonArr[''+numeroId] = {id:numeroId, mensaje:mensaje ,imagen: imagen,autor:autor, hora:hora};

    	  //El id de tiwtter asociado a la cuenta fabiomayorga o la que esta iniciando

    	if(id!=objeto.id) {
    		var plantilla = '<center class="center">\
    		<div   class="avatar-chat">\
    		<img  id="avatar" class="chat-img"  src="'+imagen+'" alt="Fabio">\
    		<button id="'+numeroId+'" title="Agregar a favoritos" type="button" class=" btn-favoritos" aria-label="Left Align">\
  					<span class="glyphicon glyphicon-star " aria-hidden="true"></span>\
				</button>\
    		</div>\
    		<div class="chat-bubble">\
    		<span class="span-mensaje">'+ emo + '</span>\
    		<span class="span-hora">'+ hora +' '+autor    +'</span>\
    		<div class="chat-bubble-arrow-border"></div>\
    		<div class="chat-bubble-arrow"></div>\
    		</div>\
    		</center>';

    


    	}
    	else {
    		var plantilla = '<center class="center">\
    		<div  class="avatar-chat-right">\
    			<img class="chat-img-right" id="avatar" src="'+imagen+' " alt="Fabio">\
				<button id="'+numeroId+'" title="Agregar a favoritos" type="button" class=" btn-favoritos" aria-label="Left Align">\
  					<span class="glyphicon glyphicon-star " aria-hidden="true"></span>\
				</button>\
    		</div>\
    		<div class="chat-bubble-right">\
    		<span class="span-mensaje-right">'+ emo + '</span>\
    		<span class="span-hora-right">'+ hora + '</span>\
    		<div class="chat-bubble-arrow-border-right"></div>\
    		<div class="chat-bubble-arrow-right"></div>\
    		</div></center>';
    	}

    		$( ".center" ).fadeIn('slow/1000/fast', function() {

    				});


						numeroId++;

    	return plantilla;
    }

     	$("body").on( 'click', '#favoritos' , function(){
   
						}  );

     	    	$("body").on( 'click', '.btn-favoritos' , function(){


     	    		$("#"+$(this).attr('id')).css("color","red");
    			$("#"+$(this).attr('id')).val("marcado");
    			$("#favoritos").append('<div id="c'+jsonArr[$(this).attr('id')].id+'" style="display:none;" class="menu-favoritos"><img class="chat-img-right-fav" id="avatar" src="'+jsonArr[$(this).attr('id')].imagen+' " alt="Fabio"><span class="span-mensaje-right-fav">'+jsonArr[$(this).attr('id')].mensaje+'</span><span class="span-hora-right">'+jsonArr[$(this).attr('id')].hora+'</span><div class="chat-bubble-arrow-border-right"></div><div class="chat-bubble-arrow-right"></div></div>');
    			    	$("body").on( 'click', '.menu-favoritos', function(){

    			    	});

    			    		$( "#c"+jsonArr[$(this).attr('id')].id ).fadeIn('slow/1000/fast', function() {

    		});

    			    	$("#"+$(this).attr('id')).addClass('marcados');
    			    	  		$("#"+$(this).attr('id')).removeClass('btn-favoritos');

     	    	});

    	$("body").on( 'click', '.marcados' , function(){

	

    			    	$("#"+$(this).attr('id')).addClass('btn-favoritos');
    			    	  		$("#"+$(this).attr('id')).removeClass('marcados');


    			$("#c"+$(this).attr('id')).fadeTo(300, 0 , function(){	

    				$("#"+$(this).attr('id')).slideUp(230, function(){
    					$("#"+$(this).attr('id')).remove();
    				});
				  
    			});

				
					$("#"+$(this).attr('id')).val("no marcado");
					$("#"+$(this).attr('id')).css("color","rgb(51, 51, 51)");

    	

    	}  );

$(".favoritos").click(function(){
	$("#"+$(this).attr('id')).css("color","red");
});


}
);

