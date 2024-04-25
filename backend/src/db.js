require('dotenv').config();
const { Sequelize } = require('sequelize');
const userModel = require('./Models/User');
const storeModel = require('./Models/Store');
const productoModel = require('./Models/Product');
const categoryModel = require('./Models/Category');
const comprasUsuarioModel = require('./Models/CompraUsuario');
const { PGDATABASE, PGHOST, PGPASSWORD, PGUSER, PGPORT } = process.env;

console.log(`${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`);
const sequelize = new Sequelize(
	`postgres://marketplace_vtls_user:pNNYjuGMfWpo62JgO2zngYmqap7Io5wy@dpg-col7ql8cmk4c73bna030-a.oregon-postgres.render.com/marketplace_vtls`,
	{
		dialect: 'postgres',
		logging: false,
		native: false,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false, 
			},
		},
	}
);

try {
	sequelize.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

userModel(sequelize);
productoModel(sequelize);
storeModel(sequelize);
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

User.hasMany(ComprasUsuario);
ComprasUsuario.belongsTo(User);

Product.hasMany(ComprasUsuario);
ComprasUsuario.belongsTo(Product);

Store.hasMany(ComprasUsuario);
ComprasUsuario.belongsTo(Store);

Category.hasMany(ComprasUsuario);
ComprasUsuario.belongsTo(Category);

// relacion mucho a mucho
//User.belongsTo(Product, { through: ComprasUsuario });
//Product.belongsTo(User, { through: ComprasUsuario });

module.exports = {
	sequelize: sequelize,
	...sequelize.models,
};
