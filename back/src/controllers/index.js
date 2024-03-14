//funciones de la logica de cada ruta

const totalMovies = require("../services/moviesService");


const moviesController =(req, res) =>{
   const movies = totalMovies.createMovie();
   res.status(200).json(movies);
};

module.exports = {
    moviesController
};