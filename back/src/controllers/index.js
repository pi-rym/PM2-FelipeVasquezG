//funciones de la logica de cada ruta

const totalMovies = require("../services/moviesService");

const moviesController = async (req, res) =>{
  try {
    const movies = await totalMovies.getMovie();
   res.status(200).json(movies);
    
  } catch (error) {
    res.status(500).send(error.message);
        
  } 
  
}

const postMovie = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const savedMovie = await totalMovies.postMovie({
      title, year, director, duration, genre, rate, poster 
    });
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).send(error.message);
  }
};



module.exports = {   
    moviesController,
    postMovie
}; 