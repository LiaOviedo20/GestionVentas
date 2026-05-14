const express = require('express');
const router = express.Router();
const Evento = require('../Models/Evento');

router.get('/', async (req, res) => {
    try {
        const eventos = await Evento.findAll();
        res.json(eventos);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/', async (req, res) => {
    try {
        const nuevo = await Evento.create(req.body);
        res.status(201).json(nuevo);
    } catch (err) { res.status(400).json({ error: err.message }); }
});

router.delete('/:id', async (req, res) => {
    try {
        await Evento.destroy({ where: { id: req.params.id } });
        res.json({ message: "Eliminado" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;