const express = require( 'express' );
const { postUsers, login, renewToken } = require('../controllers/user.controller.js');
const authUser = require ('../middlewares/auth.js')
const router = express.Router();


// Defino las rutas de autenticacion
router.post( '/login', authUser, login);
router.post( '/register', authUser, postUsers );  // Ruta publica (company, desarrollador)
// router.get( '/re-new-token', authUser, renewToken)
router.get( '/re-new-token', authUser, renewToken )


module.exports = router;