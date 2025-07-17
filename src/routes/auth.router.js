const express = require( 'express' );
const { postUsers, login } = require('../controllers/user.controller.js');
const router = express.Router();

// Defino las rutas de autenticacion
router.post( '/login', login);
router.post( '/register', postUsers );  // Ruta publica (company, desarrollador)
// router.get( '/renewtoken', );


module.exports = router;