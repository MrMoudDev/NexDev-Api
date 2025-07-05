const express = require('express')
const { getvacant, getvacantById, postvacant, putvacant, patchvacant, deletevacant} = require("../controllers/vacant.controller.js")
const router = express.Router()

router.get("/", getvacant)
router.get("/:vancat", getvacantById)
router.post("/", postvacant)
router.put("/:vacant", putvacant)
router.patch("/:vacant", patchvacant)
router.delete("/:vacant", deletevacant)

module.exports = router