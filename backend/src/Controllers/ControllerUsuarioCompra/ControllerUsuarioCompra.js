const { ComprasUsuario, User, Product } = require("../../db");

//GET trae todo las compras de la DB.
const get = async () => {
    const compras = await ComprasUsuario.findAll({
        include: [
            {
                model: User,
            },
            {
                model: Product,
                attributes: ["Id", "Nombre", "Imagen", "Disponible", "Precio", "Descripcion", "Genero" ]
            }
        ]
    });
	return compras;
};

//POST Carga la Compras en la DB.
const postAdd = async () => {

};

module.exports = {
    get,
    postAdd,
}
