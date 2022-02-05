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

/* ------ OTHERS METHODS OF USERS------ */

router.get('/:id', (requests, response) => {
  const {id} = requests.params;
  let userRequests = null;
  usersDB.forEach((item) => {
    if (item.id === parseInt(id)) {

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


router.post('/', (req, res) => {
  const { body } = req;
  try {
    usersDB.push(body);
    res.status(201).json({
      message: 'User created succesfully',
    });
  } catch (error) {
    res.status(500).json({
      message: "There was an internal",
      error
    })
  }
});

router.put('/:id/name/:name/username/:username', (req,res) => {
  const{id, name, username} = req. params;
  try {
    usersDB.forEach((item)=>{
      if (item.id === parseInt(id)) {
        item.name = name
        item.username = username
      }
    })
    res.json({
      Message:"User name and it's name modified succesfuly"
    })
  } catch (error) {
    res.status(500).json({
      message:"There was an internal error",
      error
    })
  }
});

router.delete('/;id', (req,res) => {
  const { id } = req.params
  try {
    usersDB = usersDB.filter( item =>
      item.id !== parseInt (id)
    );
  } catch (error) {
    res.status(500).json({
      Message:"There was an internal",
      error
    })
  }

});

module.exports = router;
