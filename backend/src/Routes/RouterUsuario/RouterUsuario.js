const { Router } = require("express");
const { getAllUsuario, postAddUsuario } = require("../../Handlers/HandlerUsuario/HandlerUsuarios");

const routerUsuario = Router();

routerUsuario.get("/", getAllUsuario);
routerUsuario.post("/", postAddUsuario);
routerUsuario.put("/", putEditUsuario);

module.exports = routerUsuario;
