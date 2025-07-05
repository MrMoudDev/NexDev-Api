const express = require("express")
const { getdevProfile, postdevProfile, putdevProfile, patchdevProfile, deletedevProfile, getdevProfileById } = require("../controllers/devProfile.controller.js")


const router = express.Router()

//Rutas definidas
router.get("/", getdevProfile)
router.get("/:developer", getdevProfileById)
router.post("/",postdevProfile)
router.put("/:developer", putdevProfile)
router.patch("/:developer", patchdevProfile)
router.delete("/:developer", deletedevProfile)

module.exports = router

