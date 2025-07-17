const express = require("express")
const { getUsers, getUserById, postUsers, putUsers, patchUsers, deleteUsers, getUsersByRol, login } = require("../controllers/user.controller")


const router = express.Router()

//Rutas definidas
router.post("/", postUsers)    
router.post('/login', login)     // Solamente puede registrar quien este autenticado
router.get("/", getUsers)
router.get("/:id", getUserById)
router.put("/:id", putUsers)
router.patch("/:id", patchUsers)
router.delete("/:id", deleteUsers)
router.get("/rol/:rol", getUsersByRol)

module.exports = router