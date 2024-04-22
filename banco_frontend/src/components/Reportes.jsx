import React, { useState } from "react";
import axios from "axios";

function Reportes() {
    const [fecha, setFecha] = useState("");
    const [reportes, setReportes] = useState([]);

    const handleFetchReportes = async () => {
        try {
        const { data } = await axios.get(
            `http://localhost:5000/api/reportes?fecha=${fecha}`
        );
        setReportes(data);
        } catch (error) {
        console.error("Error fetching reportes", error);
        }
    };

    return (
        <div className="container">
        <h2>Visualizar Reportes</h2>
        <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
        />
        <button onClick={handleFetchReportes}>Buscar Reportes</button>
        <ul>
            {reportes.map((report) => (
            <li key={report.idTransaccion}>
                {report.fechaTransaccion} - {report.monto}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Reportes;
