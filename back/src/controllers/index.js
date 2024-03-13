//funciones de la logica de cada ruta

const {Router} = require("express");


const moviesController =(req, res) =>{
    res
    .status(200)
    .send("proximamente tendras el listado de peliculas del Front");
};

module.exports = {
    moviesController
};