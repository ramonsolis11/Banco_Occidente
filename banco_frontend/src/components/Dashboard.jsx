import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="container">
        <h1>Dashboard</h1>
        <nav>
            <ul>
            <li>
                <Link to="/clientes">Gestionar Clientes</Link>
            </li>
            <li>
                <Link to="/transacciones">Gestionar Transacciones</Link>
            </li>
            <li>
                <Link to="/agencias">Gestionar Agencias</Link>
            </li>
            <li>
                <Link to="/reportes">Ver Reportes</Link>
            </li>
            </ul>
        </nav>
        </div>
    );
}

export default Dashboard;
