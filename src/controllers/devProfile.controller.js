const devProfileModel = require("../models/devProfile.model.js")

const getdevProfile = async (req , res) => {
    try {
        const data = await devProfileModel.find()
        res.json(data)
    } catch {
        res.json({msg:"Obten los developer"})
    }
}
const getdevProfileById = async (req , res) => {
    const userId = req.params.id
    try {
        const data = await devProfileModel.findById(userId)

        res.json( data )
    } catch {
        res.json({msg: 'Error al obetener los datos'})
    }
}
const postdevProfile = async (req, res) => {
    const inputData = req.body
    try {
        const data = await devProfileModel.create(inputData)

        res.json( data )
    } catch {
        res.json({msg: 'Error al registrar al usuario'})
    }
}
const patchdevProfile = async (req , res) => {
    const userId = req.params.id
    const inputData = req.body

    try {
        const data = await devProfileModel.findByIdAndUpdate( userId, inputData, {new: true})
        res.json( data )
    } catch {
        res.json({msg:'Error al actualizar el usuario'})
    }
}
const putdevProfile = async (req, res) => {
    const userId = req.params.id
    const inputData = req.body

    try {
        const data = await devProfileModel.findByIdAndUpdate(userId, inputData, {new:true})
        res.json( data )
    } catch {
        res.json({msg: 'Error al actualizar todos los usuarios'})
    }
}
const deletedevProfile = async (req, res) => {
    const userId = req.params.id

    try {
        const data = await devProfileModel.findByIdAndDelete(userId)

        res.json( data )
    } catch {
        res.json({msg:'Error al Eliminar los usuarios'})
    }
}


module.exports = {
    getdevProfileById,
    getdevProfile,
    postdevProfile,
    patchdevProfile,
    putdevProfile,
    deletedevProfile
}