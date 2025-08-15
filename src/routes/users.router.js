const express = require("express")
const { getUsers, getUserById, postUsers, putUsers, patchUsers, deleteUsers, getUsersByRol, login } = require("../controllers/user.controller")
const authUser = require("../middlewares/auth")


const router = express.Router()

//Rutas definidas
router.post("/", authUser, postUsers)
router.post('/login', authUser, login)     // Solamente puede registrar quien este autenticado
router.get("/", getUsers)
router.get("/:id", getUserById)
router.put("/:id", authUser, putUsers)
router.patch("/:id", authUser, patchUsers)
router.delete("/:id", authUser, deleteUsers)
router.get("/rol/:rol", getUsersByRol)

module.exports = router