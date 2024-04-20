const { DataTypes } = require("sequelize")

module.exports = storeModel = (sequelize) => {
  const Store = sequelize.define("Store", {
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
      type: DataTypes.STRING
    },
    Activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    // Contador: {
    //   type: DataTypes.INTEGER,
    //   defaultValue: 0,
    // },
  },
    { timestamps: false }
  );
  return Store;
}