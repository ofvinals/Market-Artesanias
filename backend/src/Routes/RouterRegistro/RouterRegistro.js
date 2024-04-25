const { Router } = require("express");
const { postAddUsuario } = require("../../Handlers/HandlerRegistro/HandlerRegistro.js");

const routerRegistro = Router();

routerRegistro.post("/", postAddUsuario);

module.exports = routerRegistro;
