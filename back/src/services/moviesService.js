const axios = require("axios");

  module.exports = {
      createMovie :  async () => {
              try {
          const {data} = await axios.get(" https://students-api.up.railway.app/movies"
        );
               return data;    
       } catch (error) {
              console.log(error.message);
       }
}
 };