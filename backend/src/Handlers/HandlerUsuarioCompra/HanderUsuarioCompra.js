require('dotenv').config();
const jwt = require('jsonwebtoken');
const { get } = require('../../Controllers/ControllerUsuarioCompra/ControllerUsuarioCompra');
const { JWT_SECRET } = process.env;


//GET Trae todas las compras en la DB.
const getAllCompras = async (req, res) => {
	try 
    {
		const response = await get();
		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

//POST Carga la compras en la DB.
const postAddCompra = async (req, res) => {
	const { Nombre, Imagen } = req.body;
	const token = req.headers.authorization;

	if (!token) {
		return res.status(401).json({ message: 'Token no proporcionado' });
	}

	// Verifica y decodifica el token para obtener el userId
	let UserId;
	try {
		const tokenParts = token.split('Bearer').pop().trim();

		const tokenized = jwt.verify(tokenParts, JWT_SECRET);

		UserId = tokenized.userId;

        console.log(UserId)
        const response = await postAdd(UserId ,Nombre, Imagen);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};


module.exports = {
	postAddCompra,
	getAllCompras
};
