var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hola");
var varTexto = "Texto";
varTexto = "2";
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
arrelgoDinamico = [
    [1, { key1: "valor" }, true],
    [2, { key1: "valor" }, true],
    [3, { key1: "valor" }, true],
];
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
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    num2 = typeof num2 === "string" ? parseInt(num2) : num2;
    return num1 + num2;
}
console.log(suma(1, "5"));
// Parametro Opcional
function saludo(nombre, apellido) {
    apellido = apellido === undefined ? "" : apellido;
    return "Hola ".concat(nombre, " ").concat(apellido, ", bienvenido....");
}
console.log(saludo("Alejo", "Rivera"));
/* Reto - TSC */
function realizarProceso(valor, accion_usuario) {
    var localArray = localStorage.getItem("nuestro_array");
    switch (accion_usuario) {
        case "agregar":
            if (localStorage.getItem("nuestro_array") === null) {
                localStorage.setItem("nuestro_array", valor);
            }
            else {
                console.log(localArray);
                localArray = localArray.split(",");
                console.log(localArray);
                localArray.push(valor);
                localStorage.setItem("nuestro_array", localArray);
                break;
            }
        case "eliminar":
            localArray = localStorage.getItem("nuestro_array");
            localArray = localArray.split(",");
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
realizarProceso("miValor", "eliminar");
function soy_interfaz(data_api) {
    return "el identificador del mensaje es: ".concat(data_api.identificador, " y el nombre es: ").concat(data_api.nombre);
}
console.log(soy_interfaz({ identificador: 1, nombre: "Rick", imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" }));
// POO - PUBLIC , PRIVATE , PROTECTED 
var Usuario = /** @class */ (function () {
    function Usuario(nombreUsuario, apellidoUsuario, edadUsuario, correoUsuario) {
        this.nombre = nombreUsuario;
        this.apellido = apellidoUsuario;
        this.edad = edadUsuario;
        this.correo = correoUsuario;
    }
    Usuario.prototype.saludar = function () {
        return "Buenas noches ".concat(this.nombre, "...");
    };
    Usuario.prototype.resultadosVentasVendedor = function (nro_factura, estadoEntrega) {
        var estado = estadoEntrega ? 'entregado' : 'en reparto';
        return "El vendedor ".concat(this.nombre, ", tuvo una factura con Nro: ").concat(nro_factura);
    };
    return Usuario;
}());
/* let persona = new Usuario("Alejo", "Rivera", 25, "jalejandro142@gmail.com");
console.log(persona.saludar())
*/
var Ventas = /** @class */ (function (_super) {
    __extends(Ventas, _super);
    function Ventas(nombreUsuario, apellidoUsuario, edadUsuario, correoUsuario, facturaVenta, estadoEntrega) {
        var _this = _super.call(this, nombreUsuario, apellidoUsuario, edadUsuario, correoUsuario) || this;
        _this.nro_factura = facturaVenta;
        _this.entregado = estadoEntrega;
        return _this;
    }
    Ventas.prototype.resultadosVentasVendedor = function () {
        return _super.prototype.resultadosVentasVendedor.call(this, this.nro_factura, this.entregado);
    };
    return Ventas;
}(Usuario));
var persona = new Ventas("Alejo", "Rivera", 25, "jalejandro142@gmail.com", 78945612, true);
console.log(persona.resultadosVentasVendedor());
