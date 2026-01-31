const express = require('express');
require('dotenv').config();
const connectDB = require('./src/database');
const profileRoutes = require('./src/routers');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Rutas
app.use('/api', profileRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API NFC funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
