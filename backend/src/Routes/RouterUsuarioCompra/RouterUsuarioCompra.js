const { Router } = require("express");
const validateToken = require("../ValidateToken/ValidateToken");
const { crearCompra } = require("../../Handlers/HandlerUsuarioCompra/HanderUsuarioCompra.js");

const routerUsuarioCompra = Router();

routerUsuarioCompra.get("/");
routerUsuarioCompra.post("/", validateToken, crearCompra);

module.exports = routerUsuarioCompra;
