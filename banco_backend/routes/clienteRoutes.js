// routes/clienteRoutes.js
const express = require("express");
const router = express.Router();
const { Cliente } = require("../models");

// Obtener todos los clientes
router.get("/", async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).send(error.message);
    }
    });

    // Agregar un nuevo cliente
    router.post("/", async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
