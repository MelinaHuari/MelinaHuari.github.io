var formulario = document.getElementsByName('formulario')[0],
		elementos = formulario.elements,
		boton = document.getElementsByClassName('boton')
async function validarNombre(e){
	if (formulario.contacto_nombre.value == 0) {
		alert("Completá el campo Nombre");
		e.preventDefault();
	}
};
async function validarMensaje(e){
	if (formulario.contacto_mensaje.value == 0) {
		alert("Completá el campo Mensaje");
		e.preventDefault();
	}
};
async function validarEmail(e){
	if (formulario.contacto_email.value == 0) {
		alert("Completá el campo Correo electrónico");
		e.preventDefault();
	}
};
async function validar(e){
	validarNombre(e);
	validarEmail(e);
	validarMensaje(e);
};

formulario.addEventListener("submit", validar);

