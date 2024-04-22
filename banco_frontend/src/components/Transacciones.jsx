import { useEffect, useState } from "react";
import axios from "axios";

function Transacciones() {
    const [transacciones, setTransacciones] = useState([]);

    useEffect(() => {
        const fetchTransacciones = async () => {
        try {
            const { data } = await axios.get(
            "http://localhost:5000/api/transacciones"
            );
            setTransacciones(data);
        } catch (error) {
            console.error("Error fetching transacciones", error);
        }
        };

        fetchTransacciones();
    }, []);

    return (
        <div className="container">
        <h2>Gestionar Transacciones</h2>
        <ul>
            {transacciones.map((transaccion) => (
            <li key={transaccion.idTransaccion}>
                {transaccion.fechaTransaccion} - {transaccion.monto}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Transacciones;
