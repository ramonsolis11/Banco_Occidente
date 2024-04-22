module.exports = (sequelize, DataTypes) => {
    const Transaccion = sequelize.define(
        "Transaccion",
        {
        idTransaccion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fechaTransaccion: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        monto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        idCliente: {
            type: DataTypes.INTEGER,
            references: {
            model: "Clientes",
            key: "idCliente",
            },
        },
        // Agregar más campos y relaciones
        },
        {
        tableName: "Transacciones",
        }
    );

    return Transaccion;
};
