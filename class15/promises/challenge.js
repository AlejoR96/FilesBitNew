let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// console.log(XMLHttpRequest);

function fetchData(url_api) {
  const promise = new Promise( (resolve, reject) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = ( () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error(`hubo un error al llamar ${url_api}`));
      }
      xhttp.send()
    });
  })
  return promise;
};

// function istDone(data) {
//   console.log(data);
// };

function noDone(error) {
  console.log(error);
};


  console.log("Inicia el llamado a la API");
  fetchData("https://rickandmortyapi.com/api/character")
  .then((data) =>{
    console.log(data.info.count);
    return fetchData("https://rickandmortyapi.com/api/character/1");
  })
  .then((data) =>{
    console.log(data.name);
    return fetchData("https://rickandmortyapi.com/api/character/1");
  })

  .then((data) =>{
    console.log(data.dimension);
    return fetchData("https://rickandmortyapi.com/api/character/1");
  })
  .catch(noDone);

  //Verificar como arreglarlo