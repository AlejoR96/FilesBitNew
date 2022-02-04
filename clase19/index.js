

const express = require('express');
const routeAPI = require('./routes');
const PORT = 5000;
const app = express();

app.get('/', (request, response) => {
  response.send("Hola mundo ")
});


routeAPI(app);

// Open in browser
app.listen( PORT , () =>{
  console.log(`Running app http://127.0.0.1:${PORT}`)
});
