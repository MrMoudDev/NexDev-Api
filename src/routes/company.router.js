const express = require("express")
const { getcompany, putcompany, patchcompany, deletecompany, getcompanyById } = require("../controllers/company.controller.js")
const router = express.Router()

//Rutas definidas
router.get("/", getcompany)
router.get("/:company", getcompanyById)
// router.post("/", postcompany)
router.put("/:company", putcompany)
router.patch("/:company", patchcompany)
router.delete("/:company", deletecompany)

module.exports = router