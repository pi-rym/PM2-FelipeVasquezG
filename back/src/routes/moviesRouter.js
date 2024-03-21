
const { Router } = require("express");

const {moviesController, postMovie } = require("../controllers/index");

const moviesRouter = Router();

moviesRouter.get("/", moviesController);
moviesRouter.post("/",  postMovie);


module.exports = moviesRouter; 