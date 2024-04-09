const { Router } = require("express");
const { postAddTienda, getByStore, putTienda } = require("../../Handlers/HandlerTienda/HandlerTienda");

const routerTienda = Router();

//routerTienda.get("/", );
routerTienda.get("/", getByStore);
routerTienda.post("/", postAddTienda);
routerTienda.put("/", putTienda);

module.exports = routerTienda;