const { getAll, postAdd } = require("../../Controllers/ControllerCategorias/ControllerCategorias");

//GET todas las categoria.
const getAllCategoria = async (req, res) => {
    try {
        const response = await getAll();
        return  res.status(200).json(response);
    } catch (error) {
        return  res.status(500).json({error: error.mensage});
    }
};

//POST Carga la categoria en la DB.
const postAddCategoria = async (req, res) => {
    const { Nombre } = req.body;
    try {
        const response = await postAdd(Nombre);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.mensage});
    }
};

module.exports = {
    getAllCategoria,
    postAddCategoria
}