const devProfileModel = require("../models/devProfile.model.js")

const getdevProfile = async (req , res) => {
    try {
        const data = await devProfileModel.find()
        res.json(data)
    } catch (error) {
        res.json({msg:"Obten los developer"})
    }
}
const getdevProfileById = async (req , res) => {
    const developerId = req.params.developerId
    try {
        const data = await devProfileModel.findById(developerId)

        res.json( data )
    } catch (error) {
        res.json({msg: 'Error al obetener los datos'})
    }
}
// const postdevProfile = async (req, res) => {
//     const inputData = req.body
//     try {
//         const data = await devProfileModel.create(inputData)

//         res.json( data )
//     } catch {
//         res.json({msg: 'Error al registrar al usuario'})
//     }
// }
const patchdevProfile = async (req , res) => {
    const developerId = req.params.developerId
    const inputData = req.body

    try {
        const data = await devProfileModel.findByIdAndUpdate( developerId, inputData, {new: true})
        res.json( data )
    } catch (error) {
        res.json({msg:'Error al actualizar el usuario'})
    }
}
const putdevProfile = async (req, res) => {
    const developerId = req.params.developerId
    const inputData = req.body

    try {
        const data = await devProfileModel.findByIdAndUpdate(developerId, inputData, {new:true})
        res.json( data )
    } catch (error) {
        res.json({msg: 'Error al actualizar todos los usuarios'})
    }
}
const deletedevProfile = async (req, res) => {
    const developerId = req.params.developerId

    try {
        const data = await devProfileModel.findByIdAndDelete(developerId)

        res.json( data )
    } catch (error) {
        res.json({msg:'Error al Eliminar los usuarios'})
    }
}


module.exports = {
    getdevProfileById,
    getdevProfile,
    // postdevProfile,
    patchdevProfile,
    putdevProfile,
    deletedevProfile
}