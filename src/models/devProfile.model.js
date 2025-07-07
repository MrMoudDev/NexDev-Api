const mongoose = require('mongoose')

const devProfileSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    stack: [String], // Tecnologías que maneja
    experiencia: {
        type: String,
    },
    portafolioUrl: {
        type: String,
    },
    cvUrl: {
        type: String,
    },
    // Con esta propiedad vinculamos este modelo con el de Users
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    // Relación: 1 desarrollador -> muchas aplicaciones
    aplication: { type: mongoose.Schema.Types.ObjectId,ref: 'aplication'},
},{
    versionKey: false,
    timestamps: true
})

const devProfileModel = mongoose.model( 'devProfile', devProfileSchema)
module.exports = devProfileModel