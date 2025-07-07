const express = require("express")
const { getdevProfile, putdevProfile, patchdevProfile, deletedevProfile, getdevProfileById } = require("../controllers/devProfile.controller.js")


const router = express.Router()

//Rutas definidas
router.get("/", getdevProfile)
// router.post("/",postdevProfile)
router.get("/:developer", getdevProfileById)
router.put("/:developer", putdevProfile)
router.patch("/:developer", patchdevProfile)
router.delete("/:developer", deletedevProfile)

module.exports = router

