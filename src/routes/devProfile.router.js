const express = require("express")
const { getdevProfile, postdevProfile, putdevProfile, patchdevProfile, deletedevProfile } = require("../controllers/devProfile.controller")
const router = express.Router()

//Rutas definidas
router.get("/", getdevProfile)
router.post("/",postdevProfile)
router.put("/", putdevProfile)
router.patch("/", patchdevProfile)
router.delete("/", deletedevProfile)

module.exports = router

