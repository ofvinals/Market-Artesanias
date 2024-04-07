const { Router } = require("express");
const routerProducto = require("./RouterProductos/RouterProductos");
const routerCategoria = require("./RouterCategorias/RouterCategorias");
const routerUsuario = require("./RouterUsuario/RouterUsuario");

const routes = Router();

routes.use("/Producto", routerProducto);
routes.use("/Categoria", routerCategoria);
routes.use("/Usuario", routerUsuario);

module.exports = routes;
