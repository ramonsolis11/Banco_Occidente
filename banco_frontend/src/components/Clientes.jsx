import React, { useEffect, useState } from "react";
import axios from "axios";

function Clientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/clientes");
            setClientes(data);
        } catch (error) {
            console.error("Error fetching clientes", error);
        }
        };

        fetchClientes();
    }, []);

    return (
        <div className="container">
        <h2>Gestionar Clientes</h2>
        <ul>
            {clientes.map((cliente) => (
            <li key={cliente.idCliente}>
                {cliente.nombre} - {cliente.tipoCliente}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Clientes;
