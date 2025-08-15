const express = require("express")
const { getcompany, putcompany, patchcompany, deletecompany, getcompanyById, postcompany } = require("../controllers/company.controller.js")
const authUser = require("../middlewares/auth.js")
const router = express.Router()

//Rutas definidas
router.post("/", authUser, postcompany)
router.get("/", authUser, getcompany)
router.get("/:companyId", authUser, getcompanyById)
router.put("/:companyId", authUser, putcompany)
router.patch("/:companyId", authUser, patchcompany)
router.delete("/:companyId", authUser, deletecompany)

module.exports = router