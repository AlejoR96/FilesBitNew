console.log("hola");
var varTexto = "Texto";
varTexto = '2';
var letNumero = 23;
letNumero = 23;
document.write(letNumero.toString());
var letBooleanos = true || false;
var letDinamica = " texto";
letDinamica = 90;
letDinamica = false;
letDinamica = ["Texto1", 14, true];
letDinamica = { key1: "hola" };
var arreglo = ["texto", 2, true, ["texto", 3]];
var arregloNumber = [1, 2, 3, 4, 5];
var arregloString = ["Texto1", "Texto2"];
var arregloBoolean = [true, true, false];
// tuple
var tupleArreglo1;
tupleArreglo1 = [1, 2, true, "Hola Alejo"];
// arrays sobre arrays
var arrelgoDinamico;
arrelgoDinamico = [[1, { key1: "valor" }, true], [2, { key1: "valor" }, true], [3, { key1: "valor" }, true]];
// Datos Vacios
var vacio = undefined;
var vacio2 = null;
var vacio3 = undefined;
// console.log(vacio);
// console.log(vacio2);
// console.log(vacio3);
// // typeof
// console.log(typeof(vacio));
// console.log(typeof(vacio2));
// console.log(typeof(vacio3));
// Funciones  y/o metodos
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(multiplicar(2, 5));
function suma(num1, num2) {
    if (typeof (num1) == 'string') {
        num1 = parseInt(num1);
    }
    num2 = typeof (num2) === 'string' ? parseInt(num2) : num2;
    return num1 + num2;
}
console.log(suma(1, "5"));
// Parametro Opcional
function saludo(nombre, apellido) {
    apellido = apellido === undefined ? '' : apellido;
    return "Hola ".concat(nombre, " ").concat(apellido, ", bienvenido....");
}
console.log(saludo('Alejo', 'Rivera'));
/* Reto - TSC */
function realizarProceso(valor, accion_usuario) {
    var localArray = localStorage.getItem("nuestro_array");
    switch (accion_usuario) {
        case 'agregar':
            if (localStorage.getItem("nuestro_array") === null) {
                localStorage.setItem("nuestro_array", valor);
            }
            else {
                console.log(localArray);
                localArray = localArray.split(',');
                console.log(localArray);
                localArray.push(valor);
                localStorage.setItem("nuestro_array", localArray);
                break;
            }
        case 'eliminar':
            localArray = localStorage.getItem("nuestro_array");
            localArray = localArray.split(',');
            if (localArray.length > 1) {
                localArray.pop();
                localStorage.setItem("nuestro_array", localArray);
            }
            else {
                localStorage.removeItem("nuestro_array");
            }
            break;
        default:
            break;
    }
}
realizarProceso('miValor', 'eliminar');
