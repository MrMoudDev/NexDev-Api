const express = require("express")
const { getaplication, postaplication, putaplication, patchaplication, deleteaplication, getaplicationById } = require("../controllers/aplication.controller.js")
const router = express.Router()

//Rutas definidas
router.get("/", getaplication)
router.post("/", postaplication)
router.get("/:aplicationId", getaplicationById)
router.put("/:aplicationId", putaplication)
router.patch("/:aplicationId", patchaplication)
router.delete("/:aplicationId", deleteaplication)

module.exports = router
