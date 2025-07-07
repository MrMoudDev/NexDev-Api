const express = require( 'express' );
const { postUsers } = require('../controllers/user.controller.js');
const router = express.Router();

// Defino las rutas de autenticacion
// router.post( '/login', );
router.post( '/register', postUsers );  // Ruta publica (company, desarrollador)
// router.get( '/renewtoken', );


module.exports = router;