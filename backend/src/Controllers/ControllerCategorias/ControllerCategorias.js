const { Category }= require("../../db");


//GET todo los productos.
const getAll = async () => {
      const categorias = await Category.findAll();
      const parsedOutput = JSON.stringify(categorias, null, 2);
      return JSON.parse(parsedOutput);
};


//POST Carga la categoria en la DB.
const postAdd = async ( Nombre ) => {
      if (!Nombre) {
            throw new Error("Falta <Nombre> de la categoria");
      }
      const categoria = await Category.create({
            Nombre, 
      });

      console.log( "imprimo OBJETO SEQUELIZE: CATEGORIA" );
      console.log(categoria);
      return categoria;
}

module.exports = {
      getAll,
      postAdd
}
