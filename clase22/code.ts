console.log("hola");

var varTexto:string = "Texto";
varTexto = '2';

let letNumero:number =23;
letNumero = 23;

document.write(letNumero.toString());

let letBooleanos: boolean = true || false;

let letDinamica:any = " texto";
letDinamica=90;
letDinamica= false;
letDinamica= ["Texto1", 14, true];
letDinamica= {key1: "hola"};

let arreglo : any[] = ["texto", 2, true, ["texto", 3]];
let arregloNumber: number [] = [1,2,3,4,5];
let arregloString: string[] = ["Texto1", "Texto2"]
let arregloBoolean: boolean[] = [true,true,false];

// tuple
let tupleArreglo1: [number,number,boolean,string];
tupleArreglo1=[1,2,true,"Hola Alejo"];

// arrays sobre arrays
let arrelgoDinamico: [number,object,boolean][];
arrelgoDinamico = [[1, {key1:"valor"},true],[2,{key1:"valor"},true],[3,{key1:"valor"},true]];

// Datos Vacios
let vacio:void = undefined;
let vacio2:null = null;
let vacio3:undefined = undefined;

// console.log(vacio);
// console.log(vacio2);
// console.log(vacio3);

// // typeof
// console.log(typeof(vacio));
// console.log(typeof(vacio2));
// console.log(typeof(vacio3));

// Funciones  y/o metodos

function multiplicar(num1:number,num2:number):number {
  return num1 * num2;
}

console.log(multiplicar(2,5));

function suma(num1:number | string, num2:number | string):number {
  if (typeof(num1) == 'string') {
     
    num1 = parseInt(num1);
  }
  num2 = typeof(num2) === 'string' ? parseInt(num2): num2;

  return num1 + num2;
}

console.log(suma(1,"5"));

// Parametro Opcional
function saludo(nombre:string,apellido?:string):string {
  apellido = apellido === undefined ? '': apellido;
  return `Hola ${nombre} ${apellido}, bienvenido....`
}

console.log(saludo('Alejo', 'Rivera'));


/* Reto - TSC */

function realizarProceso(valor:any, accion_usuario:string):void {
  
  let localArray:any = localStorage.getItem("nuestro_array");
  switch (accion_usuario) {
    case 'agregar':
      if (localStorage.getItem("nuestro_array")===null) {
        localStorage.setItem("nuestro_array", valor);
      }else{
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
      }else{
        localStorage.removeItem("nuestro_array");
      }
      break;
  
    default:
      break;
  }
}

realizarProceso('miValor', 'eliminar');