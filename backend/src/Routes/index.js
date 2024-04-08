const { Router } = require("express");
const routerProducto = require("./RouterProductos/RouterProductos");
const routerCategoria = require("./RouterCategorias/RouterCategorias");
const routerUsuario = require("./RouterUsuario/RouterUsuario");
const routerLoginNormal = require("./RouterLoginNormal/RouterLoginNormal");
const routerTienda = require("./RouterTienda/RouterTienda");

const routes = Router();

routes.use("/Producto", routerProducto);
routes.use("/Categoria", routerCategoria);
routes.use("/Registro", routerUsuario);
routes.use("/Login", routerLoginNormal);
routes.use("/Tienda", routerTienda);

module.exports = routes;
