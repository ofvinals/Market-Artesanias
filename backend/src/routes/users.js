const { Router } = require("express");
const  UserController = require("../controllers/users.js");

const createUserRouter = ({ userModel }) => {
      const userRouter = Router();

      const userController = new UserController({ userModel });

      userRouter.get('/', userController.getAll);


      // Faltan implementar las otras rutas con las operaciones que nuestra API sera capaz de responder ( METODOS HTTP )

      // userRouter.post('/', userController.create);
      // userRouter.get('/:id', userController.getById);
      // userRouter.delete('/:id', userController.delete);
      // userRouter.patch('/:id', userController.update);

      return userRouter

}

module.exports = createUserRouter;
