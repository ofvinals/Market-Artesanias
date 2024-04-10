const { Product, Store, Category }= require("../../db");
const { Op } =  require("sequelize");


//GET todo los productos.
const getAll = async () => {
    const producto = await Product.findAll({
        where: {
            Disponible: {
                [Op.gt]: 0 // Filtrar los libros cuya disponibilidad sea mayor que 0
            },
			Activo: true
        },
        include:  { model: Category, attributes: ["Id", "Nombre"] }
    
    });
    return producto;
};

//GETBYID solo un producto.
const getById = async (Id) => {
    const producto = await Product.findByPk(Id);
    return producto;
};

//POST Carga el producto en la DB.
const postAdd = async (Nombre, Disponible, Precio, Imagen, Descripcion, StoreId, CategoryId, Genero = null) => {
    if (!Nombre || !Imagen || !Disponible || !Precio || !Descripcion ) {
        throw new Error("All fields are required");
	}
    console.log("-----<", Nombre, Disponible,Precio,Imagen,Descripcion, StoreId, CategoryId)
	const producto = await Product.create({
        Nombre, 
        Disponible,
        Precio,
        Imagen,
        Descripcion,
        Genero
	});
    
    
	await producto.setStore(StoreId);
    console.log(producto)
	await producto.setCategory(CategoryId);
	return producto;
}

//PUT Actualiza el producto
const putUpdate = async (Id, Nombre, Disponible, Precio, Imagen, Descripcion, CategoryId, Genero = null) => {
    //console.log(Id, Nombre, Disponible,Precio,Imagen,Descripcion);
    const producto = await Product.findByPk(Id);

	if (!producto) throw new Error("El Producto no existe.");

    await Product.update({Nombre, Disponible, Precio, Imagen, Descripcion, Genero, CategoryId},{where: {Id}});

	return "Listo!!";
};

module.exports = {
    getAll,
    getById,
    postAdd,
    putUpdate
}