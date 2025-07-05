const express = require("express")
const { getUsers } = require("../controllers/user.controller")
const { postUsers } = require("../controllers/user.controller")
const { putUsers } = require("../controllers/user.controller")
const { patchUsers } = require("../controllers/user.controller")
const { deleteUsers } = require("../controllers/user.controller")

const router = express.Router()

//Rutas definidas
router.get("/", getUsers)
router.post("/", postUsers)
router.put("/", putUsers)
router.patch("/", patchUsers)
router.delete("/:id", deleteUsers)





module.exports = router

