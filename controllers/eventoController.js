// controllers/eventoController.js

const Evento = require('../Models/Evento');

exports.obtenerEventos = async (req, res) => {
    const eventos = await Evento.findAll();
    res.json(eventos);
};

exports.crearEvento = async (req, res) => {
    try {
        const evento = await Evento.create(req.body);
        res.status(201).json(evento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerEvento = async (req, res) => {
    const evento = await Evento.findByPk(req.params.id);

    if (!evento) {
        return res.status(404).json({ error: 'Evento no encontrado' });
    }

    res.json(evento);
};

exports.actualizarEvento = async (req, res) => {
    const evento = await Evento.findByPk(req.params.id);

    if (!evento) {
        return res.status(404).json({ error: 'Evento no encontrado' });
    }

    await evento.update(req.body);
    res.json(evento);
};

exports.eliminarEvento = async (req, res) => {
    const evento = await Evento.findByPk(req.params.id);

    if (!evento) {
        return res.status(404).json({ error: 'Evento no encontrado' });
    }

    await evento.destroy();
    res.json({ mensaje: 'Evento eliminado' });
};