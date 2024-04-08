const { getAll, postAdd } = require("../../Controllers/ControllerUsuarios/ControllerUsuarios");

//GET todas las Usuario.
const getAllUsuario = async (req, res) => {
    try {
        const response = await getAll();
        return  res.status(200).json(response);
    } catch (error) {
        return  res.status(500).json({error: error.mensage});
    }
};

//POST Carga la Usuario en la DB.
const postAddUsuario = async (req, res) => {
    const { Nombre, Apellido, Email, Contraseña } = req.body;
    try {
        const response = await postAdd(Nombre, Apellido, Email, Contraseña);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.mensage});
    }
};

module.exports = {
    getAllUsuario,
    postAddUsuario
}