const { Router } = require("express");
const { postAddTienda, getByStore, putTienda, deleteTienda, detalleTienda } = require("../../Handlers/HandlerTienda/HandlerTienda");
const validateToken = require("../ValidateToken/ValidateToken");

const routerTienda = Router();

//routerTienda.get("/", );
routerTienda.get("/", getByStore);
routerTienda.get("/:Id", detalleTienda);
routerTienda.post("/", validateToken, postAddTienda);
routerTienda.put("/", validateToken, putTienda);
routerTienda.delete("/:Id", validateToken, deleteTienda);


module.exports = routerTienda;
