try {
  // added code with error funcionality / Aqui va el codigo de lo que posiblemente puede fallar
} catch (error) {
  // added code with  / Aqui se declara lo que pasaria si el codigo falla
}


try {
  console.log("Soy algo")
} catch (error) {
  console.error(`El error ocurrido ${error}`);
}

// sin inicializar variable
try {
   const firtName;
   console.log(firtName)
} catch (error) {
  console.error(`El error ocurrido ${error}`);
}

