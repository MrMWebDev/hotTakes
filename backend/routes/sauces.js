const express = require('express');
const sauceCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const router = express.Router();

// Set route : "/api/sauces" GET requests
router.get('/', auth, sauceCtrl.getAllSauces);
// Set (dynamic) route : "/api/sauces/:id" GET requests
router.get('/:id', auth, sauceCtrl.getOneSauce);
// Set route : "/api/sauces" POST requests
router.post('/', auth, multer, sauceCtrl.createSauce);
// Set (dynamic) route : "/api/sauces/:id/like" POST requests
router.post('/:id/like', auth, sauceCtrl.likeSauce);
// Set (dynamic) route : "/api/sauces/:id" PUT requests
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
// Set (dynamic) route : "/api/sauces/:id" DELETE requests
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;