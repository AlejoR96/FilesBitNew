/* Inicializador de express  y body-parser*/
const express = require('express');
const app = express();
const body_parser = require('body-parser')

/* Definición de puerto */
const PORT = 3000;

app.use(body_parser.json());
app.use(express.json());

let users = [
  {
  id: "1",
  name: "Alejandro",
  last_name: "Rivera",
  id_number: "1234",
  user_name: "SoySantoGuerrero",
  email: "jalejandro@gmail.com",
  password: "alejo565"
  },
  {
  id: "2",
  name: "MAriana",
  last_name: "Rivera",
  id_number: "12345",
  user_name: "Mrivera",
  email: "mariana@gmail.com",
  password: "alejo565"
  },
  {
  id: "3",
  name: "Ana",
  last_name: "Bejarano",
  id_number: "1235",
  user_name: "Abeja",
  email: "Bejarano@gmail.com",
  password: "alejo565"
  },
]

/* Methods http */

app.get('/users', (req,res) => {
  if(users){
    res.json(users);
  }else{
    res.send("Hubo un error");
    console.error(new Error("No hay usuarios en la base de datos"));
  }
  /* res.json("Hola desde GET"); */
});

app.get('/users/:id', (req,res) => {
  /* const {params, query} = req
  console.log("params:", params);
  console.log("query:", query); */

  const {id} = req.params;
  for (let index = 0; index < users.length; index++) {
    if(users[index].id === id){
      res.json(users[index])
    }
  };

  /* users.forEach((item) => {
    if(item.id === id){
      res.json(item)
    }
  }) */

  const userTobeReturned = users.filter(user => user.id === id);
  if(userTobeReturned !== []){
    res.json(userTobeReturned)
  }

  res.json("Usuario no existe");
});

app.post('/users', (req,res) => {
const {body} = req;
console.log("Body:", body);
});

app.put('/users/:id', (req,res) => {
  res.json("Hola desde PUT");
});

app.delete('/users/:id', (req,res) => {
  res.json("Hola desde DELETE");
});



app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
});



