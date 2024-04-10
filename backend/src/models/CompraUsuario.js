const { DataTypes } = require("sequelize");

module.exports = comprasUsuarioModel = (sequelize) => {
  const ComprasUsuario =  sequelize.define("ComprasUsuario", {
    Cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  });
  return ComprasUsuario;
}