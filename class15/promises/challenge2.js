let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api) {
  const promise = new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = ( () =>{
      if (xhttp.readyState === 4) {
        (xhttp.status === 200)
        ? resolve(JSON.parse(xhttp.responseText))
        : reject (new Error('Error', url_api))
      };
    });
    xhttp.send();
  });
  return promise;
}

// function istDone(data){
//   console.log(data);
// }

function notDone(error){
  console.log(error);
}

console.log("inicia el llamado a la API");

fetchData("https://swapi.dev/api/people/")
.then( ( data ) =>{
  console.log(data);
})
.catch( notDone );