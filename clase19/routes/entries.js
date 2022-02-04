const express = require('express');

const router = express.Router();

const entries = [
  {
    id:01,
    Cabecera: "Noticias",
    Titulo: "13 masacres",
    cotenido: "14 lideres sociales",
    fechaPublicacion: "03/Febrero/2021",
    calificacion: "Nacional"
  },
  {

    id:02,
    Cabecera: "",
    Titulo: "",
    cotenido: "",
    fechaPelicula: "",
    calificacion: ""
  }
]


  /*
  router.get('/', (request, response) => {
    response.json({
      message: "Esta es una respuesta en formato json"
    });
  }); */

/*
  router.get('/', (request, response) => {
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
    entries.forEach( (item) =>{
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
    const {id,options,name} = res.params;
    res.json({
      id,options,name
    })
  });


  /* ------ENTRIES------ */

  router.get('/', (req,res) => {
    res.json({
      Message:"Hello in GET entries"
    })
  });


  router.post('/', (req,res) => {
    res.json({
      Message:"Hello in POST entries"
    })
  });

  router.put('/', (req,res) => {

    res.json({
      Message:"Hello in PUT entries"
    })
  });

  router.delete('/', (req,res) => {

    res.json({
      Message:"Hello in DELETE entries"
    })
  });

  module.exports = router;
