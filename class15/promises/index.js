//Constructor
function constructorDePromesas(resolvio, rechazo) {
 const number = 5;
  if (number >= 0) {
    resolvio("si se cumplió")
  } else {
    rechazo("no se cumplió")
  }
}

function algoVaAPasar() {
  let promise = new Promise(constructorDePromesas);
  return promise;
}

// Encadenamiento de funciones 

function hecho(siSeLLegoACumplir) {
  console.log(siSeLLegoACumplir);
}

function noHecho(noSeCumplio) {
  console.log(noSeCumplio)
}

algoVaAPasar().then( hecho ).catch( noHecho);

