const { Router } = require("express");
const routerProducto = require("./RouterProductos/RouterProductos");
const routerCategoria = require("./RouterCategorias/RouterCategorias");

const routes = Router();

routes.use("/Producto", routerProducto);
routes.use("/Categoria", routerCategoria);

module.exports = routes;
