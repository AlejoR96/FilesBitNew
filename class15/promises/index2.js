const somethingWillHapepen = () => {
  return Promise((resolve, reject) => {
    let number = 5;
    if (number <= 0) {
      setTimeout(() => {
        resolve("Si se cumplio la llamada a la API")
      }, 2000);
    }else{
      const error = new Error("hubo un error al llamar la API")
      reject(error);
    }
  });
};

console.log("Inicio el programa");

somethingWillHapepen()
.then(data => console.log(data))
.catch(error => console.log(error))

