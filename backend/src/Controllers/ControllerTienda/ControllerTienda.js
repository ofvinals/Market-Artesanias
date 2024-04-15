const { Store, User } = require("../../db");

//GET trae solo la tiena del vendedor en la DB.
const get = async (UserId) => {
    const tienda = await Store.findAll({
        where: { UserId }
    });
	return tienda;
};

//POST Carga la tienda en la DB.
const postAdd = async (UserId, Nombre, Imagen) => {
    if (!Nombre ) {
        throw new Error("Todos los campos son obligatorios");
	}

    console.log("entra")
	const tienda = await Store.create({Nombre, Imagen, UserId});
    console.log(tienda)
    await User.update({Vendedor: true},{where: {Id: UserId}});
    
    console.log(tienda)
	return tienda;
};

//PUT actualiza la tieda en la DB.
const update = async (Id, Nombre, Imagen) => {
    const tienda = await Store.findByPk(Id);
	if (!tienda) throw new Error("El Tienda no existe.");
    console.log(tienda)
    console.log(Nombre, Imagen)

    await Store.update({ Nombre, Imagen }, {where: {Id}});

	return "Listo!!";
};

module.exports = {
    get,
    postAdd,
    update
}