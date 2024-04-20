const { Router } = require("express");
const validateToken = require("../ValidateToken/ValidateToken");
const { crearCompra, getAllCompras } = require("../../Handlers/HandlerUsuarioCompra/HanderUsuarioCompra.js");

const routerUsuarioCompra = Router();

routerUsuarioCompra.get("/", getAllCompras);
routerUsuarioCompra.post("/", validateToken, crearCompra);

module.exports = routerUsuarioCompra;
