const { 
        getAll, 
        getById, 
        postAdd, 
        putUpdate 
    } = require("../../Controllers/ControllerProductos/ControllerProducto");

//GET todo los productos.
const getAllProducto = async (req, res) => {
    try {
        const response = await getAll();
        return  res.status(200).json(response);
    } catch (error) {
        return  res.status(500).json({error: error.mensage});
    }
};

//GETBYID solo un producto.
const getByIdProducto = async (req, res) => {
    const { Id } = req.params;
    try {
        const response = await getById(Id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.mensage});
    }
};

//POST Carga el producto en la DB.
const postAddProducto = async (req, res) => {
    const { Nombre, Disponible,Precio,Imagen,Descripcion, StoreId, CategoryId } = req.body;
    try {
        const response = await postAdd(Nombre, Disponible,Precio,Imagen,Descripcion, StoreId, CategoryId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.mensage});
    }
};

//PUT Actualiza el producto
const putUpdateProducto = async (req, res) => {
    const { Id, Nombre, Disponible,Precio,Imagen,Descripcion } = req.body;
    try {
        const response = await putUpdate(Id, Nombre, Disponible,Precio,Imagen,Descripcion);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({error: error.mensage});
    }
};

module.exports = {
    getAllProducto,
    getByIdProducto,
    postAddProducto,
    putUpdateProducto
}
