const validarDatosMiddleware = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ message: "Todos los datos son obligatorios" });
    }

    if (isNaN(year) || year.length !== 4) {
        return res.status(400).json({ message: "El año debe ser un número de 4 dígitos" });
    }

    next();
};
module.exports =  validarDatosMiddleware;