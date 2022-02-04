const express = require('express');

const router = express.Router();

/* Users */

const usersDB = [
  {
    id: 1,
    name: "ALejandro",
    surname: "Rivera",
    username: "SoySantoGuerrero",
    phone: "3105707407"
  },
  {
    id: 2,
    name: "Mariana",
    surname: "Rivera",
    username: "Mrivera",
    phone: "310570"
  }
];


/* // ejecutar archivos json por medio de endpoints
router.get('/', (requests, response) => {
response.json({
  message: "Esta es un archivo JSON"
  })
}); */

// parametros
router.get('/:id', (requests, response) => {
  const userID = requests.params.id
response.json({
  message: "Esta es un archivo JSON",
  userID
  })
});

// querys con if
router.get('/', (request, response) => {
  const size = request.query.size
  if(size){
    response.json({
      message: "Ejecutaste una query tipo size",
      size
    })
  }else{
    response.json(usersDB);
  };
});

// querys con for ech
router.get('/:id', (requests, response) => {
  const userID = requests.params.id
  let userRequests = null;
  usersDB.forEach((item) => {
    if (item.id === parseInt(userID)) {

      userRequests = item;
    };
  });
  if (userRequests) {
    response.json(userRequests)
  } else {
    response.status(404).json({
      message:"User not found",

    })
  }
});

// others types of methods

/* ---USERS--- */
router.post('/', (req,res) => {

  res.json({
    Message:"Hello desde Post"
  })
});

router.put('/', (req,res) => {

  res.json({
    Message:"Hello desde Put"
  })
});

router.delete('/', (req,res) => {

  res.json({
    Message:"Hello desde Post"
  })
});

module.exports = router;
