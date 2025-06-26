const express = require("express")
const { getcategory, postcategory, putcategory, patchcategory, deletecategory } = require("../controllers/category.controller")
const router = express.Router()

//Rutas definidas
router.get("/", getcategory)
router.post("/", postcategory)
router.put("/", putcategory)
router.patch("/", patchcategory)
router.delete("/", deletecategory)

module.exports = router
