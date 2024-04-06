const { Router } = require("express");
const routerProducto = require("./RouterProductos/RouterProductos");

const routes = Router();

routes.use("/Product", routerProducto);

module.exports = routes;
