const { User } = require("../../db");
const bcrypt = require("bcryptjs");

//GET todas las usuario.
const getAll = async () => {
    const usuario = await User.findAll();
    return usuario;
};

//GET solo un usuario.
const controllerByEmailUser = async (Email) => {
	const user = await User.findOne({
		where: {Email}
	});
	return user;
};

//POST Carga la usuario en la DB.
const postAdd = async (Nombre, Apellido, Email, Contraseña) => {
    if (!Nombre || !Apellido || !Email || !Contraseña ) {
        throw new Error("All fields are required");
	}

    if (!Contraseña || Contraseña.length < 8) {
		throw new Error("Password is required");
	}

    const validationEmail = await User.findOne({
		where: {
			Email: Email,
		}
	})
	if (validationEmail) {
        throw new Error("El correo electronico ya existe");
	}

    const hashedContraseña = await bcrypt.hash(Contraseña, 12);

	const usuario = await User.create({
        Nombre, 
        Apellido, 
        Email, 
        Contraseña: hashedContraseña
	});
    
    console.log(usuario)
	return usuario;
};

module.exports = {
    getAll,
    postAdd,
    controllerByEmailUser
}