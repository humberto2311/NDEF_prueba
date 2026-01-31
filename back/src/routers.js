const express = require('express');
const router = express.Router();
const profileController = require('./profileController');

// Rutas para perfiles
router.get('/profiles', profileController.getAllProfiles);
router.get('/profiles/:id', profileController.getProfileById);
router.get('/profiles/nfc/:nfcId', profileController.getProfileByNFC);
router.post('/profiles', profileController.createProfile);
router.put('/profiles/:id', profileController.updateProfile);
router.delete('/profiles/:id', profileController.deleteProfile);

module.exports = router;