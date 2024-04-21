const { Router } = require("express");
const { 
        getAllProducto, 
        getByIdProducto, 
        postAddProducto, 
        putUpdateProducto, 
        getAllProductoVendedor,
        putSuspender,
        putQuitarSuspension,
    } = require("../../Handlers/HandlerProductos/HandlerProductos");
const validateToken = require("../ValidateToken/ValidateToken");

const routerProducto = Router();

routerProducto.get("/", getAllProducto);
routerProducto.get("/Vendedor", validateToken, getAllProductoVendedor);
routerProducto.get("/:Id", getByIdProducto);
routerProducto.post("/", validateToken, postAddProducto);
routerProducto.put("/", validateToken, putUpdateProducto);
routerProducto.put("/Suspender", validateToken, putSuspender);
routerProducto.put("/QuitarSuspension", validateToken, putQuitarSuspension);

module.exports = routerProducto;