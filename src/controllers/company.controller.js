const companyModel = require("../models/company.model.js")

const getcompany = async (req , res) => {
    try {
        const data = await companyModel.find();
        res.json(data)
    } catch {
        res.json({msg:"Obten las company"})
    }
}
const getcompanyById = async (req , res) => {
    const companyId = req.params.companyId
    try {
        const data = await companyModel.findById(companyId)

        res.json( data )
    } catch {
        res.json({msg: 'Error al obetener los datos'})
    }
}
const postcompany = async (req, res) => {
    // TODO: Falta registrar el id de esta compañia registrada en el 
    const inputData = req.body
    try {
        const data = await companyModel.create(inputData)

        res.json( data )
    } catch {
        res.json({msg: 'Error al registrar al usuario'})
    }
}
const patchcompany = async (req , res) => {
    const companyId = req.params.companyId
    const inputData = req.body

    try {
        const data = await companyModel.findByIdAndUpdate( companyId, inputData, {new: true})
        res.json( data )
    } catch {
        res.json({msg:'Error al actualizar company'})
    }
}
const putcompany = async (req, res) => {
    const companyId = req.params.companyId
    const inputData = req.body

    try {
        const data = await companyModel.findByIdAndUpdate(companyId, inputData, {new:true})
        res.json( data )
    } catch {
        res.json({msg: 'Error al actualizar todos las company'})
    }
}
const deletecompany = async (req, res) => {
    const companyId = req.params.companyId

    try {
        const data = await companyModel.findByIdAndDelete(companyId)

        res.json( data )
    } catch {
        res.json({msg:'Error al Eliminar los usuarios'})
    }
}



module.exports = {
    getcompany,
    getcompanyById,
    postcompany,
    patchcompany,
    putcompany,
    deletecompany
}