// models/usuario.js
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        "Usuario",
        {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Agregar más campos si es necesario
        },
        {
        tableName: "Usuarios",
        }
    );

    return Usuario;
};
