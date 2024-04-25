const { Router } = require("express");
const { 
      getAllCategoria, 
      postAddCategoria 
} = require("../../Handlers/HandlerCategoria/HandlerCategorias");
const validateToken = require("../ValidateToken/ValidateToken");

const routerCategoria = Router();

routerCategoria.get("/", getAllCategoria);
routerCategoria.post("/", validateToken, postAddCategoria);

module.exports = routerCategoria;
