const { Store } = require("../../db");

//POST Carga la usuario en la DB.
const postAdd = async (Nombre) => {
    if (!Nombre ) {
        throw new Error("Todos los campos son obligatorios");
	}

	const tienda = await Store.create({Nombre});
    
    console.log(tienda)
	return tienda;
};

module.exports = {
    postAdd
}