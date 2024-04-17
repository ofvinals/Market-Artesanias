const {
	postAdd,
	update,
	get,
	deleteStoreById,
} = require('../../Controllers/ControllerTienda/ControllerTienda');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

//cargar el libro en la base de dato
const getByStore = async (req, res) => {
	const token = req.headers.authorization;
	//console.log(token)

	if (!token) {
		return res.status(401).json({ message: 'Token no proporcionado' });
	}

	// Verifica y decodifica el token para obtener el userId
	let UserId;
	try {
		const tokenParts = token.split('Bearer').pop().trim();

		const tokenized = jwt.verify(tokenParts, JWT_SECRET);

		UserId = tokenized.userId;
		console.log("userID", UserId)
		const tienda = await get(UserId);
		return res.status(201).json(tienda);
	} catch (error) {
		return res.status(401).json({ message: 'Token inválido' });
	}
};

//POST Carga la Tienda en la DB.
const postAddTienda = async (req, res) => {
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

		const response = await postAdd(UserId, Nombre, Imagen);
		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

//PUT Carga la Tienda en la DB.
const putTienda = async (req, res) => {
	console.log('reqbodytienda', req.body);
	const { Id, Nombre, Imagen } = req.body;
	console.log('handlertienda', Imagen, Nombre);
	try {
		const response = await update(Id, Nombre, Imagen);
		return res.sendStatus(202).json(response);
		// if( !isAdmin ) return res.sendStatus(403); // En caso de no ser admin, retorno codigo de error: "Acceso Prohibido"
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const deleteTienda = async (req, res) => {
	const { Id } = req.params;
	const isAdmin = req.user.Admin; // Es administrador?
	//
	// if( !isAdmin ) return res.sendStatus(403); // En caso de no ser admin, retorno codigo de error: "Acceso Prohibido"
	try {
		const response = await deleteStoreById(Id);
		return res.status(200).json(response);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = {
	postAddTienda,
	getByStore,
	putTienda,
	deleteTienda,
};
