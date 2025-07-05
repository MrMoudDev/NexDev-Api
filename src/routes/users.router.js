const express = require("express")
const { getUsers, getUserById, postUsers, putUsers, patchUsers, deleteUsers } = require("../controllers/user.controller")


const router = express.Router()

//Rutas definidas
router.get("/", getUsers)
router.get("/:id", getUserById)
router.post("/", postUsers)
router.put("/:id", putUsers)
router.patch("/:id", patchUsers)
router.delete("/:id", deleteUsers)


module.exports = router