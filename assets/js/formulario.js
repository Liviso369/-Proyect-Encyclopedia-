//obtenemos la etiqueta form con todo su contenido

var formulario = document.getElementById("formulario");

//obtenemos un array de los input
var inputs = [...document.getElementsByTagName("input")];

//obtenemos el select con todo su contenido
var valselect = document.getElementById("favorito");
inputs[0].focus();

// funcion llama a las funciones para crear los parrafos de errores
llamarerrores();

//creamos una coleccion de datos(objetos)
var expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ]{4,16}$/,
    apellido: /^[a-zA-ZÀ-ÿ]{4,16}$/,
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    clave: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/
};

var validartodo = {
    nombre: false,
    apellido: false,
    usuario: false,
    clave1: false,
    clave2: false,
    email: false,
    favorito: false
};

//funcion que valida cuando se envie el formulario

function enviar(e) {
    e.preventDefault();

    if (validartodo.nombre && validartodo.apellido && validartodo.usuario && validartodo.clave1 && validartodo.clave2 && validartodo.email && validartodo.favorito) {

        datos();
        formulario.reset();
        for (i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute("class", "inputtrue")
            inputs[i].setAttribute("class", "input")
        }
        inputs[0].focus();
    } else {
        document.querySelector("#caja8 .errortotal").classList.add("errortotalactivo");
    }
}

//funcion que llama a otras funciones de validacion
//e.target.name me da el nombre de las etiquetas input

function validarFormulario(e) {
    switch (e.target.name) {
        case "nombre":
            validarnombre(e);
            break;
        case "apellido":
            validarapellido(e);
            break;
        case "usuario":
            validarusuario(e);
            break;
        case "clave1":
            validarclave1(e);
            validarclave2(e);
            break;
        case "clave2":
            validarclave2(e);
            break;
        case "email":
            validaremail(e);
            break;
        case "favorito":
            validarfavorito();
            break;
    }

}

//funcion que valida el nombre

function validarnombre(e) {
    if (expresiones.nombre.test(e.target.value)) {
        document.getElementById("nombre").classList.remove("inputfalse");
        document.getElementById("nombre").classList.add("inputtrue");
        document.querySelector("#caja1 .error").classList.remove("erroractivo");
        validartodo.nombre = true;
    } else if (inputs[0].value == "") {
        document.getElementById("nombre").classList.remove("inputtrue");
        document.getElementById("nombre").classList.remove("inputfalse");
        document.querySelector("#caja1 .error").classList.remove("erroractivo");
        validartodo.nombre = false;
    } else {
        document.getElementById("nombre").classList.remove("inputtrue");
        document.getElementById("nombre").classList.add("inputfalse");
        document.querySelector("#caja1 .error").classList.add("erroractivo");
        validartodo.nombre = false;
    }
}

//funcion que valida el apellido

function validarapellido(e) {
    if (expresiones.apellido.test(e.target.value)) {
        document.getElementById("apellido").classList.remove("inputfalse");
        document.getElementById("apellido").classList.add("inputtrue");
        document.querySelector("#caja2 .error").classList.remove("erroractivo");
        validartodo.apellido = true;
    } else if (inputs[1].value == "") {
        document.getElementById("apellido").classList.remove("inputtrue");
        document.getElementById("apellido").classList.remove("inputfalse");
        document.querySelector("#caja2 .error").classList.remove("erroractivo");
        validartodo.apellido = false;
    } else {
        document.getElementById("apellido").classList.remove("inputtrue");
        document.getElementById("apellido").classList.add("inputfalse");
        document.querySelector("#caja2 .error").classList.add("erroractivo");
        validartodo.apellido = false;
    }
}

//funcion que valida el usuario

function validarusuario(e) {
    if (expresiones.usuario.test(e.target.value)) {
        document.getElementById("usuario").classList.remove("inputfalse");
        document.getElementById("usuario").classList.add("inputtrue");
        document.querySelector("#caja3 .error").classList.remove("erroractivo");
        validartodo.usuario = true;
    } else if (inputs[2].value == "") {
        document.getElementById("usuario").classList.remove("inputtrue");
        document.getElementById("usuario").classList.remove("inputfalse");
        document.querySelector("#caja3 .error").classList.remove("erroractivo");
        validartodo.usuario = false;
    } else {
        document.getElementById("usuario").classList.remove("inputtrue");
        document.getElementById("usuario").classList.add("inputfalse");
        document.querySelector("#caja3 .error").classList.add("erroractivo");
        validartodo.usuario = false;
    }

}

//funcion que valida la contraseña

function validarclave1(e) {
    if (expresiones.clave.test(e.target.value)) {
        document.getElementById("clave1").classList.remove("inputfalse");
        document.getElementById("clave1").classList.add("inputtrue");
        document.querySelector("#caja4 .error").classList.remove("erroractivo");
        validartodo.clave1 = true;
    } else if (inputs[3].value == "") {
        document.getElementById("clave1").classList.remove("inputtrue");
        document.getElementById("clave1").classList.remove("inputfalse");
        document.querySelector("#caja4 .error").classList.remove("erroractivo");
        validartodo.clave1 = false;
    } else {
        document.getElementById("clave1").classList.remove("inputtrue");
        document.getElementById("clave1").classList.add("inputfalse");
        document.querySelector("#caja4 .error").classList.add("erroractivo");
        validartodo.clave1 = false;
    }
}

//funcion que valida si las contraseñas son iguales
function validarclave2(e) {
    if (inputs[3].value != inputs[4].value) {
        document.getElementById("clave2").classList.remove("inputtrue");
        document.getElementById("clave2").classList.add("inputfalse");
        document.querySelector("#caja5 .error").classList.add("erroractivo");
        validartodo.clave2 = false;
    } else if (inputs[4].value == "") {
        document.getElementById("clave2").classList.remove("inputtrue");
        document.getElementById("clave2").classList.remove("inputfalse");
        document.querySelector("#caja5 .error").classList.remove("erroractivo");
        validartodo.clave2 = false;
    } else {
        document.getElementById("clave2").classList.remove("inputfalse");
        document.getElementById("clave2").classList.add("inputtrue");
        document.querySelector("#caja5 .error").classList.remove("erroractivo");
        validartodo.clave2 = true;
    }
}

//funcion que valida el email
function validaremail(e) {

    if (expresiones.email.test(e.target.value)) {
        document.getElementById("email").classList.remove("inputfalse");
        document.getElementById("email").classList.add("inputtrue");
        document.querySelector("#caja6 .error").classList.remove("erroractivo");
        validartodo.email = true;
    } else if (inputs[5].value == "") {
        document.getElementById("email").classList.remove("inputtrue");
        document.getElementById("email").classList.remove("inputfalse");
        document.querySelector("#caja6 .error").classList.remove("erroractivo");
        validartodo.email = false;
    } else {
        document.getElementById("email").classList.remove("inputtrue");
        document.getElementById("email").classList.add("inputfalse");
        document.querySelector("#caja6 .error").classList.add("erroractivo");
        validartodo.email = false;
    }
}

//funcion que valida el select

function validarfavorito() {
    if (valselect.value != "opcion") {
        validartodo.favorito = true;
        document.querySelector("#caja7 .error").classList.remove("erroractivo")
    } else {
        validartodo.favorito = false;
        document.querySelector("#caja7 .error").classList.add("erroractivo")
    }
}

//funcion de sobrescribir
function datos() {
    document.getElementById("nombreaux").innerHTML = inputs[0].value;
    document.getElementById("apellidoaux").innerHTML = inputs[1].value;
    document.getElementById("usuarioaux").innerHTML = inputs[2].value;
    document.getElementById("clave1aux").innerHTML = inputs[3].value;
    document.getElementById("clave2aux").innerHTML = inputs[4].value;
    document.getElementById("emailaux").innerHTML = inputs[5].value;
    document.getElementById("favoritoaux").innerHTML = valselect.value;
}


//llama a la creacion de parrafo error
function llamarerrores() {
    ///creando elementos error
    error1();
    error2();
    error3();
    error4();
    error5();
    error6();
    error7();
    error8();
}

//funcion creacion de errores

function error1() {
    var elemento = document.createElement("p");
    elemento.innerHTML = "El Nombre tiene que ser 4 a 16 digitos, solo puede contener letras."
    elemento.setAttribute("class", "error")
    var caja = document.getElementById("caja1")
    caja.appendChild(elemento);
}


function error2() {
    var elemento = document.createElement("p");
    elemento.innerHTML = "El Apellido tiene que ser 4 a 16 digitos y solo puede contener letras."
    elemento.setAttribute("class", "error")
    var caja = document.getElementById("caja2")
    caja.appendChild(elemento);
}

function error3() {
    var elemento = document.createElement("p");
    elemento.innerHTML = "El usuario tiene que ser 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."
    elemento.setAttribute("class", "error")
    var caja = document.getElementById("caja3")
    caja.appendChild(elemento);
}

function error4() {
    var elemento = document.createElement("p");
    elemento.innerHTML = "La contraseña tiene que ser de 4 a 12 digitos"
    elemento.setAttribute("class", "error")
    var caja = document.getElementById("caja4")
    caja.appendChild(elemento);
}

function error5() {
    var elemento = document.createElement("p");
    elemento.innerHTML = "Ambas contraseñas deben ser iguales."
    elemento.setAttribute("class", "error")
    var caja = document.getElementById("caja5")
    caja.appendChild(elemento);
}

function error6() {
    var elemento = document.createElement("p");
    elemento.innerHTML = "El correo solo puede contener letras, numeros, puntos, guiones, y guion bajo."
    elemento.setAttribute("class", "error")
    var caja = document.getElementById("caja6")
    caja.appendChild(elemento);
}

function error7() {
    var elemento = document.createElement("p");
    elemento.innerHTML = "Eliga una opcion."
    elemento.setAttribute("class", "error")
    var caja = document.getElementById("caja7")
    caja.appendChild(elemento);
}


function error8() {
    var elemento = document.createElement("p");
    elemento.innerHTML = "Complete todo los campos."
    elemento.setAttribute("class", "errortotal")
    var caja = document.getElementById("caja8")
    caja.appendChild(elemento);
}

//cuando el formulario haga submit llame a la funcion enviar

formulario.addEventListener('submit', enviar)


//por cada input llama a la funcion validar

for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', validarFormulario);
    inputs[i].addEventListener('blur', validarFormulario);
}
//cuando suceda el evento llama a la funcion

valselect.addEventListener('click', validarFormulario);
valselect.addEventListener('change', validarFormulario);