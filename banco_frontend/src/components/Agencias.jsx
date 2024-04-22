import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de tener Bootstrap instalado o incluirlo en tu proyecto

function Agencias() {
    const agencias = [
        { id: 1, nombre: "Agencia Central", ubicacion: "Centro Ciudad" },
        { id: 2, nombre: "Agencia Norte", ubicacion: "Barrio Norte" },
        // Agrega más agencias
    ];

    return (
        <div className="container mt-4">
            <h1 className="mb-3">Agencias</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Ubicación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {agencias.map((agencia) => (
                        <tr key={agencia.id}>
                            <td>{agencia.id}</td>
                            <td>{agencia.nombre}</td>
                            <td>{agencia.ubicacion}</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2">Editar</button>
                                <button className="btn btn-danger btn-sm">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-success">Agregar Nueva Agencia</button>
        </div>
    );
}

export default Agencias;

