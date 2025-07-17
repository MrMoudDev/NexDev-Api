const mongoose = require('mongoose')
const vacantSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: String,
    tecnologias: [String],
    salario: {
        min: Number,
        max: Number,
        moneda: {
            type: String,
            default: 'COP'
        }
  },
  beneficios: [String],
  tareas: [String],

  // Relación: muchas vacantes -> 1 empresa
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'company', required: false },

  // Relación: 1 vacante -> muchas aplicaciones
  applicantes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],

  fechaPublicacion: { type: Date, default: Date.now },
  fechaCierre: Date
},{
    versionKey: false,
    timestamps: true
})

const vacantModel = mongoose.model('vacant', vacantSchema)
module.exports = vacantModel