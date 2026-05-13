const sequelize = require('./datos/database');

sequelize.authenticate()
.then(() => {
    console.log('Conexión exitosa');
})
.catch(err => {
    console.log(err);
});