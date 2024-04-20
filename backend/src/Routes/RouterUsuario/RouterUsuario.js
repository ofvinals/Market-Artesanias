const { Router } = require("express");
const { getAllUsuario, patchEditUsuario, getUsuarioById, eliminarUsuario } = require("../../Handlers/HandlerUsuario/HanlderUsuario.js");
const jwt = require( "jsonwebtoken" );
const validateToken = require("../ValidateToken/ValidateToken");

const routerUsuario = Router();

routerUsuario.get("/", validateToken, getAllUsuario);
routerUsuario.get("/:Id", validateToken, getUsuarioById);
routerUsuario.patch("/:Id", validateToken, /*validateActive, */ patchEditUsuario);
routerUsuario.delete("/:Id", validateToken, eliminarUsuario);

// function validateActive( req, res, next )
// {}

module.exports = routerUsuario;
