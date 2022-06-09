///parte del carrusel 1

//traigo las imagenes/botones 
var atras1 = document.getElementById("atras1")
var adelante1 = document.getElementById("adelante1")
//llamo a las 3 cajas
var caja1 = document.getElementById("caja1")
var caja2 = document.getElementById("caja2")
var caja3 = document.getElementById("caja3")
//incializo un contador
var j = 0;
//funcion la cual sirve para ver la siguiente imagen del array
function siguiente1() {
    j++
    if (j == 1) {
        caja1.classList.add("contenedornone") 
        caja2.classList.remove("contenedornone");
    }else if (j == 2) {
        caja2.classList.add("contenedornone");
        caja3.classList.remove("contenedornone");
    }else{
        j = 0
        caja3.classList.add("contenedornone");
        caja1.classList.remove("contenedornone");
    }  
}
//funcion la cual sirve para ver la imagen anterio del array
function anterior1() {

    if (j == 0) {
        caja1.classList.add("contenedornone");
        caja3.classList.remove("contenedornone");
        j = 2 
    }else if (j == 2) {
        caja3.classList.add("contenedornone");
        caja2.classList.remove("contenedornone");
        j--
    }else{
        j = 0
        caja2.classList.add("contenedornone");
        caja1.classList.remove("contenedornone");
    }  
    
}
adelante1.addEventListener("click", siguiente1);
atras1.addEventListener("click", anterior1);


///parte del carrusel 2

//traigo las imagenes/botones 
var atras2 = document.getElementById("atras2");
var adelante2 = document.getElementById("adelante2");
//incializo un contador
var i = 0;
//creo un array con las imagenes
var imagen = [];
imagen[0] = "assets/img/leon.jpg";
imagen[1] = "assets/img/manada.jpg"
imagen[2] = "assets/img/depredador.jpg";

//funcion la cual sirve para ver la siguiente imagen del array
function siguiente2() {
    i++
    document.animal.src = imagen[i];
    if (i == imagen.length) {
        document.animal.src = imagen[0];
        i = 0
    }
}
//funcion la cual sirve para ver la imagen anterio del array
function anterior2() {
    if (i == 0) {
        document.animal.src = imagen[2];
        i = 2
    } else {
        i--
        document.animal.src = imagen[i];
    }
}
//evento el cual al hacer click en (">") o ("<") llama a la funcion
adelante2.addEventListener("click", siguiente2);
atras2.addEventListener("click", anterior2);