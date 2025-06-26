const getdevProfile = (req , res) => {
    res.send("Obtiene todos los usuarios")
}
const postdevProfile = (req, res) => {
    res.send("Crea los usuarios")
}
const patchdevProfile = (req , res) => {
    res.send("Actualiza parcialmente los usuarios")
}
const putdevProfile = (req, res) => {
    res.send("Actualiza todos los usuarios")
}
const deletedevProfile = (req, res) => {
    res.send("Elimina los usuarios")
}


module.exports = {
    getdevProfile,
    postdevProfile,
    patchdevProfile,
    putdevProfile,
    deletedevProfile
}