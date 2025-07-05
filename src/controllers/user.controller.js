const userModel = require("../models/user.model");

const getUsers = async (req , res) => {
    try {
        const data = await userModel.find({}).select('-password');
        res.json( data );
    } 
    catch (error) {
        res.json({ msg: 'Error al obtener todos los usuarios' })
    }
}

const postUsers = async (req, res) => {
    const inputData = req.body;

    try {
        const data = await userModel.create( inputData );

        res.json( data );
    } catch (error) {
        res.json({ msg: 'Error al registrar el usuario' }); 
    }
}
const patchUsers = (req , res) => {
    res.send("Actualiza parcialmente los usuarios")
}
const putUsers = (req, res) => {
    res.send("Actualiza todos los usuarios")
}
const deleteUsers = (req, res) => {
    const userId = req.params.id
    
    

    res.json()
}


module.exports = {
    getUsers,
    postUsers,
    patchUsers,
    putUsers,
    deleteUsers
}