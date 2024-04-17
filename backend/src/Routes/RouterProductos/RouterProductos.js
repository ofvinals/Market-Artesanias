const { Router } = require("express");
const { 
        getAllProducto, 
        getByIdProducto, 
        postAddProducto, 
        putUpdateProducto, 
        getAllProductoVendedor,
        putSuspender
    } = require("../../Handlers/HandlerProductos/HandlerProductos");

const routerProducto = Router();

routerProducto.get("/", getAllProducto);
routerProducto.get("/Vendedor", getAllProductoVendedor);
routerProducto.get("/:Id", getByIdProducto);
routerProducto.post("/", postAddProducto);
routerProducto.put("/", putUpdateProducto);
routerProducto.put("/Suspender", putSuspender);

module.exports = routerProducto;