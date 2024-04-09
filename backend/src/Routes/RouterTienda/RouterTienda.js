const { Router } = require("express");
const { postAddTienda, getByStore } = require("../../Handlers/HandlerTienda/HandlerTienda");

const routerTienda = Router();

//routerTienda.get("/", );
routerTienda.get("/", getByStore);
routerTienda.post("/", postAddTienda);
//routerTienda.put("/", );

module.exports = routerTienda;
