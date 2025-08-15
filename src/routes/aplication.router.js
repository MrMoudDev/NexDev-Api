const express = require("express")
const { getaplication, postaplication, putaplication, patchaplication, deleteaplication, getaplicationById } = require("../controllers/aplication.controller.js")
const authUser = require("../middlewares/auth.js")
const router = express.Router()

//Rutas definidas
router.get("/", authUser , getaplication)
router.post("/", authUser ,postaplication)
router.get("/:aplicationId", authUser ,getaplicationById)
router.put("/:aplicationId", authUser , putaplication)
router.patch("/:aplicationId", authUser , patchaplication)
router.delete("/:aplicationId", authUser , deleteaplication)

module.exports = router
