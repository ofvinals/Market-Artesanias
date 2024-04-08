const bcrypt = require("bcrypt");
const generaJsonWebToken = require("../../Jwt/GenerateJwt");
const { controllerByEmailUser } = require("../../Controllers/ControllerUsuarios/ControllerUsuarios");


const loginNormal = async (req, res) => {
    const { Email, Contraseña } = req.body;
    console.log(Email, Contraseña);
   try {
    const user = await controllerByEmailUser(Email);

    if (!user) {
        console.log("no ahi usuario")
        return res.status(400).json({error: "No Hay Usuario Con Ese Email"});
    }

    if (!user.Activo) {
        console.log("no esta activo")
        return res.status(401).json({error: "El Usuario Esta Suspendido"});
    }

    // comparo contraseña ingresada con existente
    const passwordValid = await bcrypt.compare(Contraseña, (await user).Contraseña);

    if (!passwordValid) {
        //contraseña incorrecta
        return res.status(401).json({ error: "Esta Mal La Contraseña"});
    }

    const token = await  generaJsonWebToken(user.Id, user.Email, user.Admin, 1);
    console.log(user)
    return res.status(200).json({accesoWJT: token, admin: user.Admin, vendedor: user.Vendedor})

   } catch (error) {
    console.log(error.message)
    return res.status(400).json({error: error.message})
   }
}

module.exports = loginNormal;