/** LOGIN **/

$('.toggle').click(function(){
	$('.formulario').animate({
		height: "toggle",
		'padding-top': 'toggle',
		'padding-bottom': 'toggle',
		opacity: 'toggle'
	}, "slow"	);
});


/*funcion para LOGIN*/

function Saludo (nombre) {
		document.write( "Hola " + nombre);

};