const { 
        getAll, 
        getById, 
        postAdd, 
        putUpdate, 
        getAllVendedor,
        putSuspenderP
    } = require("../../Controllers/ControllerProductos/ControllerProducto");
    require("dotenv").config();
    const jwt = require("jsonwebtoken");
    const { JWT_SECRET } = process.env;


//GET todo los productos.
const getAllProducto = async (req, res) => {
    const { Nombre } = req.query;
    try {
        const responseDb = await getAll();
        console.log(responseDb)
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
        return  res.status(500).json({error: error.message});
    }
};

//GET todo los productos del vendedor.
const getAllProductoVendedor = async (req, res) => {
    const token = req.headers.authorization;
    console.log(token)
	
	if (!token) {
		return res.status(401).json({ message: 'Token no proporcionado' });
	}
	
	// Verifica y decodifica el token para obtener el userId
	let StoreId;
	try {
		const tokenParts = token.split('Bearer').pop().trim();

		const tokenized = jwt.verify(tokenParts, JWT_SECRET);

		StoreId = tokenized.userId;
        console.log("StoreId ProductoVendedor",StoreId)
        const responseDb = await getAllVendedor(StoreId);
        
        return  res.status(200).json(responseDb);
    } catch (error) {
        return  res.status(500).json({error: error.message});
    }
};

//GETBYID solo un producto.
const getByIdProducto = async (req, res) => {
    const { Id } = req.params;
    try {
        const response = await getById(Id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

//POST Carga el producto en la DB.
const postAddProducto = async (req, res) => {
    const { Nombre, Disponible, Precio, Imagen, Descripcion, Genero, StoreId, CategoryId } = req.body;
    console.log(res.body)
    try {
        const response = await postAdd(Nombre, Disponible, Precio, Imagen, Descripcion, StoreId, CategoryId, Genero);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

//PUT Actualiza el producto
const putUpdateProducto = async (req, res) => {
    const { Id, Nombre, Disponible, Precio, Imagen, Descripcion, Genero, CategoryId} = req.body;
    try {
        const response = await putUpdate(Id, Nombre, Disponible, Precio, Imagen, Descripcion, CategoryId, Genero);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

//PUT Suspender el producto
const putSuspender = async (req, res) => {
    const { Id } = req.body;
    try {
        console.log(Id)
        const response = await putSuspenderP(Id);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({error: error.mensage});
    }
};


module.exports = {
    getAllProducto,
    getByIdProducto,
    postAddProducto,
    putUpdateProducto,
    getAllProductoVendedor,
    putSuspender
}
