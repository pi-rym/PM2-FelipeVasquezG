const mongoose = require("mongoose");

const dbCon = async ()  => {
  await mongoose.connect (
    "mongodb+srv://afvasquezgarcia:DYUftbELOMcsCLbh@cluster0.rukgor9.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0"
    );  
};

module.exports = dbCon;