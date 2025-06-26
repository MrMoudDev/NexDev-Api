const getUsers = (req , res) => {
    res.send("Obtiene todos los usuarios")
}
const postUsers = (req, res) => {
    res.send("Crea los usuarios")
}
const patchUsers = (req , res) => {
    res.send("Actualiza parcialmente los usuarios")
}
const putUsers = (req, res) => {
    res.send("Actualiza todos los usuarios")
}
const deleteUsers = (req, res) => {
    res.send("Elimina los usuarios")
}


module.exports = {
    getUsers,
    postUsers,
    patchUsers,
    putUsers,
    deleteUsers
}