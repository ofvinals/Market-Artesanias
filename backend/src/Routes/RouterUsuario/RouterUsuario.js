const { Router } = require("express");
const { getAllUsuario, postAddUsuario } = require("../../Handlers/HandlerUsuario/HandlerUsuarios");

const routerUsuario = Router();

routerUsuario.get("/", getAllUsuario);
routerUsuario.post("/", postAddUsuario);

module.exports = routerUsuario;