const express = require("express")
const { getcompany, postcompany, putcompany, patchcompany, deletecompany } = require("../controllers/company.controller")
const router = express.Router()

//Rutas definidas
router.get("/", getcompany)
router.post("/", postcompany)
router.put("/", putcompany)
router.patch("/", patchcompany)
router.delete("/", deletecompany)

module.exports = router