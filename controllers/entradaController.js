// controllers/entradaController.js

const Entrada = require('../Models/Entrada');
const Evento = require('../Models/Evento');

exports.comprarEntrada = async (req, res) => {
    try {
        const { EventoId, cantidad } = req.body;

        const evento = await Evento.findByPk(EventoId);

        if (!evento) {
            return res.status(404).json({
                error: 'Evento no encontrado'
            });
        }

        const entradasVendidas = await Entrada.sum('cantidad', {
            where: { EventoId }
        }) || 0;

        if (entradasVendidas + cantidad > evento.capacidad) {
            return res.status(400).json({
                error: 'No hay suficientes entradas disponibles'
            });
        }

        const entrada = await Entrada.create(req.body);

        res.status(201).json(entrada);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.obtenerEntradas = async (req, res) => {
    const entradas = await Entrada.findAll({ include: Evento });
    res.json(entradas);
};