const { Product, Store, Category }= require("../../db");


//GET todo los productos.
const getAll = async () => {
    const producto = await Product.findAll();
    console.log(producto)
    return producto;
};

//GETBYID solo un producto.
const getById = async (Id) => {
    console.log(Id)
};

//POST Carga el producto en la DB.
const postAdd = async (Nombre, Disponible,Precio,Imagen,Descripcion, StoreId, CategoryId) => {
    if (!Nombre || !Imagen || !Disponible || !Precio || !Descripcion ) {
        throw new Error("All fields are required");
	}
	const producto = await Product.create({
        Nombre, 
        Disponible,
        Precio,
        Imagen,
        Descripcion
	});
    
    console.log("-----<", Nombre, Disponible,Precio,Imagen,Descripcion, StoreId, CategoryId)
	await producto.setStore(StoreId);
    console.log(producto)
	await producto.setCategory(CategoryId);
	return producto;
}

//PUT Actualiza el producto
const putUpdate = async (Id, Nombre, Disponible,Precio,Imagen,Descripcion) => {
    console.log(Id, Nombre, Disponible,Precio,Imagen,Descripcion)
};

module.exports = {
    getAll,
    getById,
    postAdd,
    putUpdate
}