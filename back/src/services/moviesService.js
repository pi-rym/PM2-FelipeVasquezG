
const Movie = require ("../models/User");

  module.exports = {

      getMovie :  async () => {
              const movies = await Movie.find();
              return movies;
},
       postMovie: async (movie) => {
              const newMovie = new Movie(movie);
              const savedMovie = await newMovie.save();
              return savedMovie; 
}
 };  