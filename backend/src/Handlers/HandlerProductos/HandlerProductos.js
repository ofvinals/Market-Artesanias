const { 
        getAll, 
        getById, 
        postAdd, 
        putUpdate 
    } = require("../../Controllers/ControllerProductos/ControllerProducto");

//GET todo los productos.
const getAllProducto = async (req, res) => {
    const { Nombre } = req.query;
    try {
        const responseDb = await getAll();
        if (Nombre) {
            const response = responseDb.filter((e) =>
              e.Nombre.toLowerCase().includes(Nombre.toLowerCase())
            );
            if (response.length > 0) {
              return res.status(200).json(response);
            } else {
              // Si no se encontraron libros con el nombre dado, devolvemos un array vacío
              return res.status(200).json([]);
            }
        }
        return  res.status(200).json(responseDb);
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
    const { Nombre, Disponible, Precio, Imagen, Descripcion, Genero, StoreId, CategoryId } = req.body;
    try {
        const response = await postAdd(Nombre, Disponible, Precio, Imagen, Descripcion, StoreId, CategoryId, Genero);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.mensage});
    }
};

//PUT Actualiza el producto
const putUpdateProducto = async (req, res) => {
    const { Id, Nombre, Disponible, Precio, Imagen, Descripcion, Genero, CategoryId} = req.body;
    try {
        const response = await putUpdate(Id, Nombre, Disponible, Precio, Imagen, Descripcion, CategoryId, Genero);
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
