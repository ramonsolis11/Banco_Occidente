const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // Asegúrate de tener esto instalado
const csrf = require('csurf');
require('dotenv').config();

// Import routes
const clienteRoutes = require('./routes/clienteRoutes');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

// Middleware para parsear cookies y JSON, y manejar CORS
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// CSRF protection middleware
const csrfProtection = csrf({ cookie: true });

// Rutas para autenticación y clientes
app.use('/api/clientes', clienteRoutes);
app.use('/api/user', authRoutes);
app.use('/api/transactions', transactionRoutes);

// Ruta de ejemplo usando protección CSRF
app.post('/process', csrfProtection, (req, res) => {
    res.send('data is being processed');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
