import React from "react";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function MiComponente({ transaccionId, setTransaccionId, refreshTransacciones }) {
    const [fechaTransaccion, setFechaTransaccion] = useState("");
    const [monto, setMonto] = useState("");
    const [idCliente, setIdCliente] = useState("");

    useEffect(() => {
        if (transaccionId !== null) {
            axios.get(`http://localhost:5000/api/transacciones/${transaccionId}`)
                .then(response => {
                    setFechaTransaccion(response.data.fechaTransaccion);
                    setMonto(response.data.monto);
                    setIdCliente(response.data.idCliente);
                })
                .catch(error => console.error("Error fetching transaccion details", error));
        }
    }, [transaccionId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaccionData = { fechaTransaccion, monto, idCliente };

        if (transaccionId === null) {
            await axios.post("http://localhost:5000/api/transacciones", transaccionData);
        } else {
            await axios.put(`http://localhost:5000/api/transacciones/${transaccionId}`, transaccionData);
        }

        setTransaccionId(null);
        setFechaTransaccion("");
        setMonto("");
        setIdCliente("");
        refreshTransacciones();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Fecha de Transacción:</label>
                <input
                    type="date"
                    className="form-control"
                    value={fechaTransaccion}
                    onChange={(e) => setFechaTransaccion(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Monto:</label>
                <input
                    type="number"
                    className="form-control"
                    value={monto}
                    onChange={(e) => setMonto(parseFloat(e.target.value))}
                    required
                />
            </div>
            <div className="form-group">
                <label>ID Cliente:</label>
                <input
                    type="number"
                    className="form-control"
                    value={idCliente}
                    onChange={(e) => setIdCliente(parseInt(e.target.value))}
                    required
                />
            </div>
            <button type="submit" className="btn btn-success">
                {transaccionId === null ? "Agregar" : "Actualizar"}
            </button>
        </form>
    );
}

MiComponente.propTypes = {
    transaccionId: PropTypes.number,
    setTransaccionId: PropTypes.func.isRequired,
    refreshTransacciones: PropTypes.func.isRequired,
};

export default MiComponente;