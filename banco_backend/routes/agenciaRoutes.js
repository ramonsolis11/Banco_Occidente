const express = require("express");
const router = express.Router();
const { Agencia } = require("../models");

// Obtener todas las agencias
router.get("/", async (req, res) => {
    try {
        const agencias = await Agencia.findAll();
        res.json(agencias);
    } catch (error) {
        res.status(500).send(error.message);
    }
    });

    // Agregar una nueva agencia
    router.post("/", async (req, res) => {
    try {
        const agencia = await Agencia.create(req.body);
        res.status(201).json(agencia);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
