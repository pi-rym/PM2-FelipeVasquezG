//funciones de la logica de cada ruta

const totalMovies = require("../services/moviesService");

const moviesController = async (req, res) =>{
  try {
    const movies = await totalMovies.getMovie();
   res.status(200).json(movies);
    
  } catch (error) {
    res.status(500).send(error.message);
        
  } 
};

module.exports = {   
    moviesController
};