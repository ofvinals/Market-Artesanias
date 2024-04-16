const { Router } = require("express");
const { 
      getAllCategoria, 
      postAddCategoria 
} = require("../../Handlers/HandlerCategoria/HandlerCategorias");

const routerCategoria = Router();

routerCategoria.get("/", getAllCategoria);
routerCategoria.post("/", postAddCategoria);

module.exports = routerCategoria;
