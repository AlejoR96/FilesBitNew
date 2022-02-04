const express = require('express');

const router = express.Router();

const comments = [
  {
    id:01,

  },

]



  /*
  router.get('/', (request, response) => {
    response.json({
      message: "Esta es una respuesta en formato json"
    });
  }); */


 /*  router.get('/', (request, response) => {
    const size = request.query.size
    if (size) {
      response.json({
        message: "Querys de Entradas",
        size
      });
    } else {
      response.json("ERROR!!!")
    }
  }); */

  router.get('/:id', (request, response) => {
    const entryID = request.params.id
    let entryRequest = null;
    comments.forEach( (item) =>{
      if (item.id === parseInt(entryID) ) {
        entryRequest = item
      };
    });
    if (entryRequest) {
      response.json(entryRequest)
    } else {
      response.json({
        message: "User not found",
        statusCode: "404"
      })
    };
  });

  router.get('/:id/:options/:nameRol', (req,res) => {
    const {id,options,nameRol} = res.params;
    res.json({
      id,options,nameRol
    })
  });


/* ------ OTHER METO COMMENTS------ */

router.get('/', (req,res) => {
  res.json({
    Message:"Hello in GET comments"
  })
});

router.post('/', (req,res) => {
  res.json({
    Message:"Hello Hello in POST comments"
  })
});

router.put('/', (req,res) => {

  res.json({
    Message:"Hello in PUT comments"
  })
});

router.delete('/', (req,res) => {
  res.json({
    Message:"Hello in DELETE comments"
  })
});

module.exports = router;
