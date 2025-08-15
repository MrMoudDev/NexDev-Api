const express = require('express')
const { getvacant, getvacantById, postvacant, putvacant, patchvacant, deletevacant} = require("../controllers/vacant.controller.js")
const authUser = require('../middlewares/auth.js')
const router = express.Router()


router.get("/", getvacant)
router.get("/:vancatId", getvacantById)
router.post("/", authUser, postvacant)
router.put("/:vacantId", authUser, putvacant)
router.patch("/:vacantId", authUser, patchvacant)
router.delete("/:vacantId", authUser, deletevacant)


module.exports = router