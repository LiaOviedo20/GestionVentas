const express = require('express');
const router = express.Router();
const validarCompra = require('../middlewares/validarCompra'); 
const { postEntrada } = require('../controllers/entradaController'); 

router.post('/', validarCompra, async (req, res) => {
});