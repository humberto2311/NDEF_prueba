const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || process.env.conection;
    
    await mongoose.connect(uri);
    
    console.log('✓ Conectado a MongoDB exitosamente');
  } catch (error) {
    console.error('✗ Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
