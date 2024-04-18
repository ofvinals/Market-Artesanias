const { User } = require("../../db");
const bcrypt = require("bcryptjs");

//POST Carga la usuario en la DB.
const postAdd = async (Nombre, Apellido, Email, Contraseña) => {
    let admin = false;

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
    
    if(Email === "admin123@gmail.com"){
        admin = true;
    }

	if (validationEmail) {
        throw new Error("El correo electronico ya existe");
	}
    console.log("pasa")

    const hashedContraseña = await bcrypt.hash(Contraseña, 12);

	const usuario = await User.create({
        Nombre, 
        Apellido, 
        Email, 
        Contraseña: hashedContraseña, 
        Admin: admin
	});
    
    console.log(usuario)
	return usuario;
};

module.exports = {
    postAdd,
}
