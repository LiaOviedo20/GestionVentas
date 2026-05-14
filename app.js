const express = require('express');
const sequelize = require('./datos/database');;
const Evento = require('./Models/Evento');

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use('/eventos', require('./routes/eventos'));
app.use('/entradas', require('./routes/entradas'));

app.get('/', async (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));
});