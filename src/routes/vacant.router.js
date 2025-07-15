const express = require('express')
const { getvacant, getvacantById, postvacant, putvacant, patchvacant, deletevacant} = require("../controllers/vacant.controller.js")
const router = express.Router()

router.get("/", getvacant)
router.post("/", postvacant)
router.get("/:vancatId", getvacantById)
router.put("/:vacantId", putvacant)
router.patch("/:vacantId", patchvacant)
router.delete("/:vacantId", deletevacant)

module.exports = router