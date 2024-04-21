const { Router } = require("express");
const validateToken = require("../ValidateToken/ValidateToken");
const { crearCompra, obtenerComprasPorUsuario, obtenerVentasPorUsuario } = require("../../Handlers/HandlerUsuarioCompra/HanderUsuarioCompra.js");

const routerUsuarioCompra = Router();


routerUsuarioCompra.get("/"); // Obtener todas las transacciones (tanto compras como ventas)
routerUsuarioCompra.post("/", validateToken, crearCompra); // Crear una nueva transaccion (indistintamente de ser una compra o venta segun el POV)
routerUsuarioCompra.post("/Compra/:Id", validateToken, obtenerComprasPorUsuario); // Obtengo TODAS las COMPRAS de un usuario {Id}
routerUsuarioCompra.post("/Venta/:Id", validateToken, obtenerVentasPorUsuario); // Obtengo TODAS las VENTAS de un usuario {Id}

module.exports = routerUsuarioCompra;
