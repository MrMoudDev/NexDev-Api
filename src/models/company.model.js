const mongoose = require('mongoose')
const companySchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: String,
    logoUrl: String,
    sitioWeb: String,
    correoContacto: String,

  // Relación: 1 empresa -> muchas vacantes
    vacant : [{ type: mongoose.Schema.Types.ObjectId, ref: 'vacant' }],
    creadaEn: { type: Date, default: Date.now }
},{
    versionKey: false,
    timestamps: true
})

const companyModel = mongoose.model( 'company', companySchema)
module.exports = companyModel