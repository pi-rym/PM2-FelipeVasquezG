
const { Router } = require("express");
const validarDatosMiddleware = require("../middlewares/validateMovie");

const {moviesController, postMovie } = require("../controllers/index");

const moviesRouter = Router();

moviesRouter.get("/", moviesController);
moviesRouter.post("/", validarDatosMiddleware,  postMovie);


module.exports = moviesRouter; 