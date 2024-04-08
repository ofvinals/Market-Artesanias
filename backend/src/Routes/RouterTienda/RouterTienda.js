const { Router } = require("express");
const { postAddTienda } = require("../../Handlers/HandlerTienda/HandlerTienda");

const routerTienda = Router();

//routerTienda.get("/", );
routerTienda.post("/", postAddTienda);
//routerTienda.put("/", );

module.exports = routerTienda;