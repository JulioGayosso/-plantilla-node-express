const express = require('express');
const app = express();
const router = require('./routes');

// Middleware para JSON
app.use(express.json());

app.use('/api/v1', router);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send("Welcome to Express ✅ Animo");
});

module.exports = app;
