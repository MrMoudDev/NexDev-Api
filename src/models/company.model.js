const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: String,
    logoUrl: String,
    sitioWeb: String,

    // Con esta propiedad vinculamos este modelo con el de Users
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
  // Relación: 1 empresa -> muchas vacantes
    vacant : [{ type: mongoose.Schema.Types.ObjectId, ref: 'vacant' }],
},{
    versionKey: false,
    timestamps: true
})

const companyModel = mongoose.model( 'company', companySchema)
module.exports = companyModel