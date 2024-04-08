const { DataTypes } = require("sequelize");

module.exports = productoModel = (sequelize) => { //Aquí estamos exportando una función
    const Product = sequelize.define("Product", {// Aquí estamos utilizando el método define del objeto sequelize para definir un nuevo modelo llamado "Product"
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Imagen: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false
        },
        Disponible: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Precio: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Descripcion: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Activo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true // Valor por defecto sera true
        }
    });

    return Product;//devuelve el modelo de Product que se ha definido.
};