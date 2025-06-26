const getcategory = (req , res) => {
    res.send("Obtiene todos los usuarios")
}
const postcategory = (req, res) => {
    res.send("Crea los usuarios")
}
const patchcategory = (req , res) => {
    res.send("Actualiza parcialmente los usuarios")
}
const putcategory = (req, res) => {
    res.send("Actualiza todos los usuarios")
}
const deletecategory = (req, res) => {
    res.send("Elimina los usuarios")
}


module.exports = {
    getcategory,
    postcategory,
    patchcategory,
    putcategory,
    deletecategory
}