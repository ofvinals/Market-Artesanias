const { Product, Store, Category, User }= require("../../db");
const { Op } =  require("sequelize");


//GET todo los productos.
const getAll = async () => {
    const productos = await Product.findAll({
        where: {
            Disponible: {
                [Op.gt]: 0 // Filtrar los productos cuya disponibilidad sea mayor que 0
            },
        },
        include: [
            {
                model: Store, // Supongo que el nombre del modelo de la tienda es 'Tienda'
                where: {
                    Activo: true // Filtrar las tiendas activas
                },
                required: true // Esto asegura que solo se devuelvan los productos que tienen una tienda activa asociada
            },
            {
                model: Category,
                attributes: ["Id", "Nombre"]
            }
        ]
    });

    return productos;
};

//GET todo los productos del vendedor.
const getAllVendedor = async (UserId) => {
    console.log(UserId)
    const tienda = await Store.findOne({
        where: { UserId}
    });
    if(tienda === null){
        throw new Error("No tiene una tienda");
    }
    const productos = await Product.findAll({
        where: {
            StoreId: tienda.Id
        },
        include: 
            {
                model: Category,
                attributes: ["Id", "Nombre"]
            }
    });

    return productos;
};

//GETBYID solo un producto.
const getById = async (Id) => {
    const producto = await Product.findByPk(Id,{
        include: [
            {
                model: Store,
                attributes: ["Id", "Nombre", "Imagen"]
            },
            {
                model: Category,
                attributes: ["Id", "Nombre"]
            }
        ]
    });
    return producto;
};

//POST Carga el producto en la DB.
const postAdd = async (Nombre, Disponible, Precio, Cantidad, Imagen, Descripcion, UserId, CategoryId, Genero = null) => {

    if (!Nombre || !Cantidad || !Imagen || !Disponible || !Precio || !Descripcion ) {
        throw new Error("Todos los campos son obligatorios.");
	}

    const tienda = await Store.findOne({
        where: { UserId}
    });

    if(tienda === null){
        throw new Error("No tiene una tienda");
    }

    //console.log("-----<", Nombre, Disponible,Precio,Imagen,Descripcion, StoreId, CategoryId)

	const producto = await Product.create({
        Nombre, 
        Disponible,
        Precio,
        Cantidad,
        Imagen,
        Descripcion,
        Genero,
        StoreId: tienda.Id
	});
    
    //console.log(producto)
	await producto.setCategory(CategoryId);
	return producto;
}


//PUT Actualiza el producto
const putUpdate = async (Id, Nombre, Disponible, Precio, Cantidad, Imagen, Descripcion, CategoryId, Genero = null) => {
    //console.log(Id, Nombre, Disponible,Precio,Imagen,Descripcion);
    const producto = await Product.findByPk(Id);

	if (!producto) throw new Error("El Producto no existe.");

    await Product.update({Nombre, Disponible, Precio, Cantidad, Imagen, Descripcion, Genero, CategoryId},{where: {Id}});

	return "Listo!!";
};

//PUT Suspende el producto
const putSuspenderP = async ( Id ) => {
    //console.log(Id, Nombre, Disponible,Precio,Imagen,Descripcion);
    const producto = await Product.findByPk(Id);

	if (!producto) throw new Error("El Producto no existe.");
    const tienda = await Store.findOne({where:{ UserId: producto.StoreId}});

    const contador =  tienda.Contador + 1;
    await Product.update({Activo: false},{where: {Id}});
    await Store.update({Contador: contador},{where: {UserId: producto.StoreId}});

    if(contador >= 3){
        await Store.update({Activo: false},{where: {UserId: producto.StoreId}});
        await User.update({Activo: false},{where: {Id: tienda.UserId}});
    }
	return "Listo!!";
};

//PUT Suspende el producto
const putQuitarSuspensionP = async ( Id ) => {
    //console.log(Id, Nombre, Disponible,Precio,Imagen,Descripcion);
    const producto = await Product.findByPk(Id);

	if (!producto) throw new Error("El Producto no existe.");
    const tienda = await Store.findOne({where:{ UserId: producto.StoreId}});

    const contador =  tienda.Contador - 1;
    await Product.update({Activo: true},{where: {Id}});
    await Store.update({Contador: contador},{where: {UserId: producto.StoreId}});

	return "Listo!!";
};


module.exports = {
    getAll,
    getById,
    postAdd,
    putUpdate,
    getAllVendedor,
    putSuspenderP,
    putQuitarSuspensionP
}
