const { Router } = require("express");
const routerRegistro = require("./RouterRegistro/RouterRegistro");
const routerLoginNormal = require("./RouterLoginNormal/RouterLoginNormal");
const routerProducto = require("./RouterProductos/RouterProductos");
const routerCategoria = require("./RouterCategorias/RouterCategorias");
const routerUsuario = require("./RouterUsuario/RouterUsuario");
const routerTienda = require("./RouterTienda/RouterTienda");
const routerUsuarioCompra = require("./RouterUsuarioCompra/RouterUsuarioCompra");

const routes = Router();

routes.use("/Registro", routerRegistro);
routes.use("/Login", routerLoginNormal);

routes.use("/Producto", routerProducto);
routes.use("/Categoria", routerCategoria);
routes.use("/Usuario", routerUsuario);
routes.use("/Tienda", routerTienda);
routes.use("/Compra", routerUsuarioCompra);

module.exports = routes;
