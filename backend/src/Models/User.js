const { DataTypes } = require("sequelize")

module.exports = storeModel = (sequelize) => {
      const User = sequelize.define("User", {
            Id: {
                  type: DataTypes.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
            },
            Nombre: {
                  type: DataTypes.STRING,
                  allowNull: false
            },
            Apellido: {
                  type: DataTypes.STRING,
                  allowNull: true,
            },
            Email: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  validate: {
                        isEmail: true,
                  },
            },
            Contraseña: {
                  type: DataTypes.STRING,
                  allowNull: true,
            },
            Activo: {
                  type: DataTypes.BOOLEAN,
                  allowNull: false,
                  defaultValue: true,
            },
            Vendedor: {
                  type: DataTypes.BOOLEAN,
                  allowNull: false,
                  defaultValue: false,
            },
            Admin: {
                  type: DataTypes.BOOLEAN,
                  allowNull: false,
                  defaultValue: false,
            },
            Ubicacion: {
                  type: DataTypes.STRING,
                  allowNull: true,
                  defaultValue: ""
            },
            Genero: {
                  type: DataTypes.STRING,
                  allowNull: true,
                  defaultValue: ""
            },
            FechaNacimiento: {
                  type: DataTypes.DATE,
                  allowNull: true,
                  defaultValue: null
            }
      },
            { timestamps: false }
      );
      return User;
}
