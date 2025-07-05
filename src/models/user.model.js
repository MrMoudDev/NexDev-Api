const mongoose = require( 'mongoose' )
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, "Usuario ya existe"]
    },
    password: {
        type: String,
        required: true
    }, // Encriptada con bcrypt

    rol: {
        type: String,
        enum: ['company', 'developer', 'admin'],
        default: 'developer',
        required: true
    },

    // Relación polimórfica (1 usuario -> 1 desarrollador o 1 empresa)

    company: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
    devProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'devProfile' },

},{
    versionKey: false,
    timestamps: true
})
const userModel = mongoose.model( 'users', userSchema )
module.exports = userModel