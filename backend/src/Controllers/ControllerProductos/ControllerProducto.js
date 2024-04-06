

//GET todo los productos.
const getAll = async () => {
return [{
    Nombre: "remera",
    Disponible: 5,
    Precio: 500,
    Imagen:"skksdkmssfm",
    Descripcion: "jshjhdsjvljzh js m bjvbjszn vjbsjvbmxb jvfbvj"
}]
};

//GETBYID solo un producto.
const getById = async (Id) => {
    console.log(Id)
};

//POST Carga el producto en la DB.
const postAdd = async (Nombre, Disponible,Precio,Imagen,Descripcion) => {
console.log(Nombre, Disponible,Precio,Imagen,Descripcion)
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