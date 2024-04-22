module.exports = (sequelize, DataTypes) => {
    const Agencia = sequelize.define(
        "Agencia",
        {
        idAgencia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipoCanalServicio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Agregar más campos según el esquema de tu base de datos
        },
        {
        tableName: "Agencias",
        }
    );

    return Agencia;
};
