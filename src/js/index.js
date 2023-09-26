// Obtén los elementos de los botones por su id
const facebookButton = document.getElementById("facebookButton");
const instagramButton = document.getElementById("instagramButton");

// Agrega un evento de clic para Facebook
//facebookButton.addEventListener("click", function() {
  //window.open("https://www.facebook.com/Aleja.fonseca17?mibextid=ZbWKwL", "_blank");
//});

// Agrega un evento de clic para Instagram
//instagramButton.addEventListener("click", function() {
  // window.open("https://instagram.com/fc_a17?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D", "_blank");
//});

// Obtenemos el formulario y sus elementos
const comentariosForm = document.getElementById("comentariosForm");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const comentarioTextarea = document.getElementById("comentario");

// Agregamos un evento de escucha para el envío del formulario
comentariosForm.addEventListener("submit", function(event) {
    // Detenemos el envío del formulario por defecto
    event.preventDefault();

    // Validamos los campos antes de enviar el formulario
    if (validarFormulario()) {
        // Aquí puedes enviar el formulario usando AJAX o realizar otras acciones
        alert("Formulario válido. Enviando comentarios...");
        // Puedes agregar aquí la lógica para enviar los datos del formulario
    }
});

// Función para validar el formulario
function validarFormulario() {
    let valido = true;

    if (nombreInput.value.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        valido = false;
    }

    if (correoInput.value.trim() === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        valido = false;
    } else if (!validarCorreo(correoInput.value)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        valido = false;
    }

    if (comentarioTextarea.value.trim() === "") {
        alert("Por favor, ingresa un comentario o sugerencia.");
        valido = false;
    }

    return valido;
}

// Función para validar el formato de correo electrónico
function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

// Agrega el evento "mouseover" al formulario
comentariosForm.addEventListener("mouseover", function () {
    comentariosForm.style.backgroundColor = "lightblue";
});

// Agrega el evento "mouseout" al formulario
comentariosForm.addEventListener("mouseout", function () {
    comentariosForm.style.backgroundColor = "";
});

// Agrega el evento "focus" al campo de entrada 'nombre'
nombreInput.addEventListener("focus", function () {
    nombreInput.style.border = "2px solid blue";
    console.log("Se enfocó la celda");
});

// Agrega el evento "blur" al campo de entrada 'nombre'
nombreInput.addEventListener("blur", function () {
    nombreInput.style.border = "";
    console.log("Se perdió el foco");
});

// Agrega el evento "focus" al campo de entrada 'correo'
correoInput.addEventListener("focus", function () {
    correoInput.style.border = "2px solid blue";
    console.log("Se enfocó la celda")
});

// Agrega el evento "blur" al campo de entrada 'correo'
correoInput.addEventListener("blur", function () {
    correoInput.style.border = "";
    console.log("Se perdió el foco");
});

// Agrega el evento "focus" al campo de entrada 'comentario'
comentarioTextarea.addEventListener("focus", function () {
    comentarioTextarea.style.border = "2px solid blue";
    console.log("Se enfocó la celda");
});

// Agrega el evento "blur" al campo de entrada 'comentario'
comentarioTextarea.addEventListener("blur", function () {
    comentarioTextarea.style.border = "";
    console.log("Se perdió el foco");
});

// Agrega el evento "keyup" al campo de entrada 'nombre'
nombreInput.addEventListener("keyup", function (event) {
    const nombreValue = nombreInput.value;
    console.log("Nombre actual:", nombreValue);
});

// Agrega el evento "keydown" al campo de entrada 'nombre'
nombreInput.addEventListener("keydown", function (event) {
    console.log("Tecla presionada en Nombre");
});

// Agrega el evento "keyup" al campo de entrada 'correo'
correoInput.addEventListener("keyup", function (event) {
    const correoValue = correoInput.value;
    console.log("Correo actual:", correoValue);
});

// Agrega el evento "keydown" al campo de entrada 'correo'
correoInput.addEventListener("keydown", function (event) {
    const correoValue = correoInput.value;
    console.log("Tecla presionada en Correo");
});

// Agrega el evento "keyup" al campo de entrada 'comentario'
comentarioTextarea.addEventListener("keyup", function (event) {
    console.log("Tecla liberada en Comentario");
});

// Agrega el evento "keydown" al campo de entrada 'comentario'
comentarioTextarea.addEventListener("keydown", function (event) {
    console.log("Tecla presionada en Comentario");
});

