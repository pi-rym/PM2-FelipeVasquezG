
const { Router } = require("express");

const {moviesController} = require("../controllers/index");

const moviesRouter = Router();

moviesRouter.get("/", moviesController);

module.exports = moviesRouter; 