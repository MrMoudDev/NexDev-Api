const mongoose = require( 'mongoose' )

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true,
        unique: [ true, 'El username ya existe' ]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: [ true, 'El email ya existe' ],
        required: [ true, 'El email es obligatorio' ]
    },
    password: {
        type: String,
        trim: true,
        minlength: [ 6, 'La contrasenia debe tener mas de 6 caracteres' ],
        maxlength: [ 12, 'La contrasenia debe tener menos de 12 caracteres' ],
        required: [ true, 'El password es obligatorio' ]
    },
    role: {
        type: String,
        enum: [ 'admin', 'company', 'developer' ],
        default: 'developer'
    }
},{
    versionKey: false,
    timestamps: true
})

const userModel = mongoose.model( 'users', userSchema );

module.exports = userModel;