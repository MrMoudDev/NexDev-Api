const express = require( 'express' );
const { postUsers, login, renewToken } = require('../controllers/user.controller.js');
const authUser = require ('../middlewares/auth.js')
const router = express.Router();


// Defino las rutas de autenticacion
router.post( '/login', login);
router.post( '/register', postUsers );  // Ruta publica (company, desarrollador)
// router.get( '/re-new-token', authUser, renewToken)
router.get( '/re-new-token', authUser, renewToken )


module.exports = router;