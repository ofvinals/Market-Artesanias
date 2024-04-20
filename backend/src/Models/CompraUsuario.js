const { DataTypes } = require("sequelize");

module.exports = comprasUsuarioModel = (sequelize) => {
      const ComprasUsuario =  sequelize.define("ComprasUsuario", {
            Id: {
                  type: DataTypes.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
            },
            Titulo: {
                  type: DataTypes.STRING,
                  allowNull: true
            },
            FechaCompra: {
                  type: DataTypes.DATE,
                  allowNull: false
            },
            Cantidad: {
                  type: DataTypes.INTEGER,
                  allowNull: false
            },
            PrecioTotal: {
                  type: DataTypes.DECIMAL,
                  allowNull: false
            },
      });
      return ComprasUsuario;
}
