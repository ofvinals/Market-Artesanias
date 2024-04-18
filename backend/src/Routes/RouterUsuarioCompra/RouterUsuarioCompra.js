const { Router } = require("express");
const validateToken = require("../ValidateToken/ValidateToken");

const routerUsuarioCompra = Router();

routerUsuarioCompra.get("/");
routerUsuarioCompra.post("/", validateToken);

module.exports = routerUsuarioCompra;
