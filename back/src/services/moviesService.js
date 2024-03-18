const axios = require("axios");
const Movie = require ("../models/User");

  module.exports = {
      getMovie :  async () => {
       const movies = await Movie.find();
       return movies;
}
 }; 