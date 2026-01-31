const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  // El ID que grabarás en el chip o emularás (ej: "user_001")
  nfcId: { type: String, required: true, unique: true },
  
  fullName: { type: String, required: true },
  jobTitle: String,
  bio: String,
  avatarUrl: String,
  
  // Objeto para datos de contacto
  contact: {
    email: String,
    phone: String,
    website: String
  },
  
  // Array de redes sociales para que sea dinámico
  socialLinks: [{
    platform: String, // ej: 'linkedin', 'instagram'
    url: String
  }],
  
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Profile', ProfileSchema);