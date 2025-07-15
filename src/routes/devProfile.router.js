const express = require("express")
const { getdevProfile, putdevProfile, patchdevProfile, deletedevProfile, getdevProfileById } = require("../controllers/devProfile.controller.js")


const router = express.Router()

//Rutas definidas
router.get("/", getdevProfile)
// router.post("/",postdevProfile)
router.get("/:developerId", getdevProfileById)
router.put("/:developerId", putdevProfile)
router.patch("/:developerId", patchdevProfile)
router.delete("/:developerId", deletedevProfile)

module.exports = router

