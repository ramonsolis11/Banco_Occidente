const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Usuario } = require("../models");

const router = express.Router();

const refreshTokenSecret = "yourrefreshtokensecret";
const accessTokenSecret = "youraccesstokensecret";
let refreshTokens = [];

router.post("/token", (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.sendStatus(401);
    }
    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }
    jwt.verify(token, refreshTokenSecret, (err, user) => {
        if (err) {
        return res.sendStatus(403);
        }
        const accessToken = jwt.sign(
        { username: user.username },
        accessTokenSecret,
        { expiresIn: "20m" }
        );
        res.json({ accessToken });
    });
    });

    router.post("/logout", (req, res) => {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter((t) => t !== token);
    res.send("Logout successful");
    });

    // Registro de usuario
    router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const usuario = await Usuario.create({
        username,
        password: hashedPassword,
        });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).send(error.message);
    }
    });

    // Inicio de sesión
    router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const usuario = await Usuario.findOne({ where: { username } });

    if (usuario && (await bcrypt.compare(password, usuario.password))) {
        const token = jwt.sign({ idUsuario: usuario.idUsuario }, "secretKey", {
        expiresIn: "1h",
        });
        res.json({ message: "Authenticated successfully", token });
    } else {
        res.status(401).send("Credentials are incorrect");
    }
});

module.exports = router;
