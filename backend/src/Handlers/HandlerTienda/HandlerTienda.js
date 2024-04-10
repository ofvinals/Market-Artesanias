const { postAdd } = require("../../Controllers/ControllerTienda/ControllerTienda");

//POST Carga la Tienda en la DB.
const postAddTienda = async (req, res) => {
    const { Nombre } = req.body;
    try {
        const response = await postAdd(Nombre);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.mensage});
    }
};

module.exports = {
    postAddTienda
}