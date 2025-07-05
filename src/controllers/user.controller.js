const userModel = require("../models/user.model.js")

const getUsers = async (req , res) => {
    try {
        const data = await userModel.find()
        res.json( data )
    } catch {
        res.json({msg: 'Error al obtener los usuarios'})
    }
}

const getUserById = async (req , res) => {
    const userId = req.params.id
    try {
        const data = await userModel.findById(userId)

        res.json( data )
    } catch {
        res.json({msg: 'Error al obtener los usuarios'})
    }
}
const postUsers = async (req, res) => {
    const inputData = req.body

    try {
        const data = await userModel.create(inputData)

        res.json( data )
    } catch {
        res.json({msg: 'Error al registrar el usuario'})
    }
}
const patchUsers = async (req , res) => {
        const userId = req.params.id
        const inputData = req.body

    try {
        const data = await userModel.findByIdAndUpdate(userId, inputData, {new: true})

        res.json( data )
    } catch {
        res.json({msg: 'Error al actualizar el usuario'})
    }
}

const putUsers = async (req, res) => {
        const userId = req.params.id
        const inputData = req.body

    try {
        const data = await userModel.findByIdAndUpdate(userId, inputData, {new: true})
        res.json(data)
    } catch {
        res.json({msg: "Error al actualizar el usuario"})
    }
}

const deleteUsers = async (req, res) => {
    const userId = req.params.id
    try {
        const data = await userModel.findByIdAndDelete(userId)
        res.json(data)
    } catch {
        res.json({msg: 'Error al eliminar el usuario'})
    }
}


module.exports = {
    getUserById,
    getUsers,
    postUsers,
    patchUsers,
    putUsers,
    deleteUsers
}