const express = require("express")
const { getdevProfile, putdevProfile, patchdevProfile, deletedevProfile, getdevProfileById } = require("../controllers/devProfile.controller.js")
const authUser = require("../middlewares/auth.js")


const router = express.Router()

//Rutas definidas
router.get("/", getdevProfile)
// router.post("/",postdevProfile)
router.get("/:developerId", getdevProfileById)
router.put("/:developerId", authUser, putdevProfile)
router.patch("/:developerId", authUser, patchdevProfile)
router.delete("/:developerId", authUser ,deletedevProfile)

module.exports = router

