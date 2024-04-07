// import { validateMovie, validatePartialMovie } from '../schemas/users.js' // para la validacion al crear recursos de la API -
// Se me ocurrio implementar la libreria de "Zod" que sirve para validacioens ( deje el correspondiente directorio creado para luego usarla )
// Cualquier cosa luego lo charlamos

class UserController {
      constructor ({ userModel }) {
            this.userModel = userModel;
      };

      getAll = async (req, res) => {
            const movies = await this.userModel.getAll();
            res.json(movies);
      };

      // Faltan implementar las otras operaciones del controlador que seran muy identicas a las del modelo ( ver modelo -> ../models/postgresql/users.js )

};

module.exports = UserController;
