// definir las rutas con get/users =>

const {Router} = require("express");
const moviesRouter = require("./moviesRouter");

const router = Router();

router.use("/movies", moviesRouter);

module.exports = router;


