const express = require("express")
const { getaplication, postaplication, putaplication, patchaplication, deleteaplication, getaplicationById } = require("../controllers/aplication.controller.js")
const router = express.Router()

//Rutas definidas
router.get("/", getaplication)
router.get("/:aplication", getaplicationById)
router.post("/", postaplication)
router.put("/:aplication", putaplication)
router.patch("/:aplication", patchaplication)
router.delete("/:aplication", deleteaplication)

module.exports = router
