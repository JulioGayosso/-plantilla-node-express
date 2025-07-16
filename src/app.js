const express = require('express');
const app = express();

// Middleware para JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send("Welcome to Express ✅ Animo");
});

module.exports = app;
