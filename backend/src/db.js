require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const userModel = require("./Models/User");
const storeModel = require("./Models/Store");
const productoModel = require("./Models/Product");
const categoryModel = require("./Models/Category");
const comprasUsuarioModel = require("./Models/CompraUsuario");
const { PGDATABASE, PGHOST, PGPASSWORD, PGUSER, PGPORT } = process.env;

const sequelize = new Sequelize(
      `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
      {
            logging: false,
            native: false
      }
);

try {
      sequelize.authenticate();
      console.log('Connection has been established successfully.');
} catch (error) {
      console.error('Unable to connect to the database:', error);
}


userModel(sequelize);
storeModel(sequelize);
productoModel(sequelize);
categoryModel(sequelize);
comprasUsuarioModel(sequelize);

//Me traigo los modelos
const { User, Product, Store, Category, ComprasUsuario } = sequelize.models;

//relaciones con los modelos

// relacion uno a mucho 
User.hasMany(Store);
Store.belongsTo(User);

Store.hasMany(Product);
Product.belongsTo(Store);

Category.hasMany(Product);
Product.belongsTo(Category);

// relacion mucho a mucho
User.belongsTo(Product, { through: ComprasUsuario });
Product.belongsTo(User, { through: ComprasUsuario });


module.exports = {
      sequelize: sequelize,
      ...sequelize.models,
};
