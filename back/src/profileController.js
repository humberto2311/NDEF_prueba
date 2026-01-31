const Profile = require('./profile');

// Obtener todos los perfiles
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener perfiles', error: error.message });
  }
};

// Obtener perfil por ID 
exports.getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id);
    if (!profile) {
      return res.status(404).json({ message: 'Perfil no encontrado' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el perfil', error: error.message });
  }
};

// Obtener perfil por NFC ID
exports.getProfileByNFC = async (req, res) => {
  try {
    const { nfcId } = req.params;
    const profile = await Profile.findOne({ nfcId });
    if (!profile) {
      return res.status(404).json({ message: 'Perfil NFC no encontrado' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el perfil NFC', error: error.message });
  }
};

// Crear nuevo perfil
exports.createProfile = async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el perfil', error: error.message });
  }
};

// Actualizar perfil
exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProfile = await Profile.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProfile) {
      return res.status(404).json({ message: 'Perfil no encontrado' });
    }
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el perfil', error: error.message });
  }
};

// Eliminar perfil
exports.deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProfile = await Profile.findByIdAndDelete(id);
    if (!deletedProfile) {
      return res.status(404).json({ message: 'Perfil no encontrado' });
    }
    res.status(200).json({ message: 'Perfil eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el perfil', error: error.message });
  }
};