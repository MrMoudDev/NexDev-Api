const mongoose = require('mongoose')
const devProfileSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
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
    // Relación: 1 desarrollador -> muchas aplicaciones
    aplication: { type: mongoose.Schema.Types.ObjectId,ref: 'aplication'},
    creadoEn: { type: Date,default: Date.now }
},{
    versionKey: false,
    timestamps: true
})

const devProfileModel = mongoose.model( 'devProfile', devProfileSchema)
module.exports = devProfileModel