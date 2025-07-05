const mongoose = require('mongoose')
const aplicationSchema = new mongoose.Schema({
    // Relación: muchas aplicaciones -> 1 desarrollador
    devProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'devProfile', required: true },
  // Relación: muchas aplicaciones -> 1 vacante
    vacant: { type: mongoose.Schema.Types.ObjectId, ref: 'vacant', required: true },

    estado: {
        type: String,
        enum: ['pendiente', 'en revisión', 'rechazada', 'aceptada'],
        default: 'pendiente'
    },
  mensaje: String,
  aplicadaEn: { type: Date, default: Date.now }
},{
    versionKey: false,
    timestamps: true
})

const aplicationModel = mongoose.model( 'aplication', aplicationSchema)
module.exports = aplicationModel