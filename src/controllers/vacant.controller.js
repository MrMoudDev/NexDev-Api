const vacantModel = require("../models/vacant.model.js")

const getvacant = async (req , res) => {
    try {
        const data = await vacantModel.find()
        console.log('aaaaa', data)
        res.json( data )
    } catch (error) {
        console.log(error)
        res.json({msg: 'Error al obtener los usuarios'})
    }
}

const getvacantById = async (req , res) => {
    const vacantId = req.params.vacantId
    try {
        const data = await vacantModel.findById(vacantId)

        res.json( data )
    } catch (error) {
        res.json({msg: 'Error al obtener las vacantes'})
    }
}
const postvacant = async (req, res) => {
    const inputData = req.body

    try {
        const data = await vacantModel.create(inputData)

        res.json( data )
    } catch (error) {
        res.json({msg: 'Error al registrar la vacante'})
    }
}
const patchvacant = async (req , res) => {
        const vacantId = req.params.vacantId
        const inputData = req.body

    try {
        const data = await vacantModel.findByIdAndUpdate(vacantId, inputData, {new: true})

        res.json( data )
    } catch (error) {
        res.json({msg: 'Error al actualizar la vacante'})
    }
}

const putvacant = async (req, res) => {
        const vacantId = req.params.vacantId
        const inputData = req.body

    try {
        const data = await vacantModel.findByIdAndUpdate(vacantId, inputData, {new: true})
        res.json(data)
    } catch (error) {
        res.json({msg: "Error al actualizar la vacante"})
    }
}

const deletevacant = async (req, res) => {
    const vacantId = req.params.vacantId
    try {
        const data = await vacantModel.findByIdAndDelete(vacantId)
        res.json(data)
    } catch (error) {
        res.json({msg: 'Error al eliminar la vacante'})
    }
}

module.exports = {
    getvacant,
    getvacantById,
    postvacant,
    putvacant,
    patchvacant,
    deletevacant
}