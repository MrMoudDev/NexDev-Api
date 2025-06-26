const getcompany = (req , res) => {
    res.send("Obtiene todos los usuarios")
}
const postcompany = (req, res) => {
    res.send("Crea los usuarios")
}
const patchcompany = (req , res) => {
    res.send("Actualiza parcialmente los usuarios")
}
const putcompany = (req, res) => {
    res.send("Actualiza todos los usuarios")
}
const deletecompany = (req, res) => {
    res.send("Elimina los usuarios")
}


module.exports = {
    getcompany,
    postcompany,
    patchcompany,
    putcompany,
    deletecompany
}