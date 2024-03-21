
const createMovie = require("./renderCards");


const axios = require("axios");

const fetchMovie = async () =>{
      
        try {
         const data = await axios.get("http://localhost:3000/movies");
                createMovie(data.data);    
        } catch (error) {
               console.log(error.message);
        }
      
} 
fetchMovie(); 

