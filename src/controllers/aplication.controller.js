const aplicationModel = require("../models/aplication.model.js")

const getaplication = async (req , res) => {
    try {
        const data = await aplicationModel.find()
        res.json(data)
    } catch (error) {
        res.json({msg:"Obten los developer"})
    }
}
const getaplicationById = async (req , res) => {
    const aplicationId = req.params.aplicationId
    try {
        const data = await aplicationModel.findById(aplicationId)

        res.json( data )
    } catch (error) {
        res.json({msg: 'Error al obetener los datos'})
    }
}
const postaplication = async (req, res) => {
    const inputData = req.body
    try {
        const data = await aplicationModel.create(inputData)

        res.json( data )
    } catch (error) {
        res.json({msg: 'Error al registrar al usuario'})
    }
}
const patchaplication = async (req , res) => {
    const aplicationId = req.params.aplicationId
    const inputData = req.body

    try {
        const data = await aplicationModel.findByIdAndUpdate( aplicationId, inputData, {new: true})
        res.json( data )
    } catch (error) {
        res.json({msg:'Error al actualizar el usuario'})
    }
}
const putaplication = async (req, res) => {
    const aplicationId = req.params.aplicationId
    const inputData = req.body

    try {
        const data = await aplicationModel.findByIdAndUpdate(aplicationId, inputData, {new:true})
        res.json( data )
    } catch (error) {
        res.json({msg: 'Error al actualizar todos los usuarios'})
    }
}
const deleteaplication = async (req, res) => {
    const aplicationId = req.params.aplicationId

    try {
        const data = await aplicationModel.findByIdAndDelete(aplicationId)

        res.json( data )
    } catch (error) {
        res.json({msg:'Error al Eliminar los usuarios'})
    }
}


module.exports = {
    getaplication,
    getaplicationById,
    postaplication,
    patchaplication,
    putaplication,
    deleteaplication
}