module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define(
        "Cliente",
        {
        idCliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipoCliente: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Agregar más campos según el esquema de tu base de datos
        },
        {
        tableName: "Clientes",
        }
    );

    return Cliente;
};
