const { Router } = require("express");
const validateToken = require("../ValidateToken/ValidateToken");
const { crearCompra, obtenerComprasPorUsuario, obtenerVentasPorUsuario, getAllCompras } = require("../../Handlers/HandlerUsuarioCompra/HanderUsuarioCompra.js");

const routerUsuarioCompra = Router();


routerUsuarioCompra.get("/", validateToken, getAllCompras); // Obtener todas las transacciones (tanto compras como ventas)
routerUsuarioCompra.post("/", validateToken, crearCompra); // Crear una nueva transaccion (indistintamente de ser una compra o venta segun el POV)
routerUsuarioCompra.get("/Compra/:Id", validateToken, obtenerComprasPorUsuario); // Obtengo TODAS las COMPRAS de un usuario {Id}
routerUsuarioCompra.get("/Venta/:Id", validateToken, obtenerVentasPorUsuario); // Obtengo TODAS las VENTAS de un usuario {Id}

module.exports = routerUsuarioCompra;
