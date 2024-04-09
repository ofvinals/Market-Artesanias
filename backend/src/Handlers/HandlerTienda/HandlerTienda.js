const { postAdd } = require("../../Controllers/ControllerTienda/ControllerTienda");
const { Store } = require("../../db");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
 

//cargar el libro en la base de dato
const getByStore = async (req, res) => {
		

	const token = req.headers.authorization;
    console.log(token)
	
	if (!token) {
		return res.status(401).json({ message: 'Token no proporcionado' });
	}
	
	// Verifica y decodifica el token para obtener el userId
	let UserId;
	try {
		const tokenParts = token.split('Bearer').pop().trim();
        
		const tokenized = jwt.verify(tokenParts, JWT_SECRET);

		UserId = tokenized.userId;

        const tienda = await Store.findAll({
            where: { UserId }
        });
        return  res.status(201).json(tienda);
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
        
        const response = await postAdd(UserId ,Nombre, Imagen);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.mensage});
    }
};

module.exports = {
    postAddTienda,
    getByStore
}