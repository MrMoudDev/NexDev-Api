const express = require("express")
const { getcompany, putcompany, patchcompany, deletecompany, getcompanyById, postcompany } = require("../controllers/company.controller.js")
const router = express.Router()

//Rutas definidas
router.get("/", getcompany)
router.post("/", postcompany)
router.get("/:companyId", getcompanyById)
router.put("/:companyId", putcompany)
router.patch("/:companyId", patchcompany)
router.delete("/:companyId", deletecompany)

module.exports = router