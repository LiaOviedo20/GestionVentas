const Entrada = require('../Models/Entrada');

module.exports = async (req, res, next) => {
    try {
        const { usuario, cantidad, eventoId } = req.body; 

        const entradasUsuario = await Entrada.findAll({
            where: {
                usuario,
                eventoId 
            }
        });

        let total = 0;
        entradasUsuario.forEach(e => {
            total += e.cantidad;
        });

        if (total + parseInt(cantidad) > 4) {
            return res.status(400).json({
                error: 'Máximo 4 entradas por usuario para este evento'
            });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: "Error al validar la compra" });
    }
};