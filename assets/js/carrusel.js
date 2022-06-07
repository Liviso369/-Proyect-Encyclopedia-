//traigo las imagenes/botones 
var adelante2 = document.getElementById("adelante2");
var atras2 = document.getElementById("atras2");
//incializo un contador
var i = 0;
//creo un array con las imagenes
var imagen = [];
imagen[0]="assets/img/leon.jpg";
imagen[1]="assets/img/manada.jpg"
imagen[2]="assets/img/depredador.jpg";

//funcion la cual sirve para ver la siguiente imagen del array
function siguiente2() {
    i++
    document.animal.src = imagen[i];
    if (i == imagen.length) {
        document.animal.src = imagen[0];
        i= 0
    }  
}
//funcion la cual sirve para ver la imagen anterio del array
function anterior2() {
    if (i == 0) {
        document.animal.src = imagen[2];  
        i=2
    }else{ 
        i--
        document.animal.src = imagen[i];
    }   
}
//envento el cual al hacer click en (">") o ("<") llama a la funcion
adelante2.addEventListener("click", siguiente2);
atras2.addEventListener("click", anterior2);

