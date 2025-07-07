const companyModel = require("../models/company.model.js")
const devProfileModel = require("../models/devProfile.model.js")
const userModel = require("../models/user.model.js")

const getUsers = async (req , res) => {
    try {
        const data = await userModel.find()
        res.json( data )
    } catch( error ) {
        res.json({msg: 'Error al obtener los usuarios'})
    }
}

const getUserById = async (req , res) => {
    const userId = req.params.id
    try {
        const data = await userModel.findById(userId)

        res.json( data )
    } catch( error ) {
        res.json({msg: 'Error al obtener los usuarios'})
    }
}
const postUsers = async (req, res) => {
    const inputData = req.body
    const { email, password, rol } = inputData;

    let companyRegistered;
    let developerData;

    try {
        // Paso 1: Verificar si el usuario existe
        const userExists = await userModel.findOne({ email: inputData.email });
        // Verificando si el usuario existe
        if ( userExists ) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        const userRegistered = await userModel.create({ email, password, rol});
        const userId = userRegistered._id;

        // Paso 2: Filtro los datos a registrar por rol
        if( inputData.rol === 'company' ) {
            inputData.company.userId = userId;      // Asocia el Id de la cuenta de usuario al registro de compañia

            companyRegistered = await companyModel.create( inputData.company );
        }
        else if( inputData.rol === 'developer' ) {
            inputData.developer.userId = userId;    // Asocia el Id de la cuenta de usuario al registro de desarrollador

            developerRegistered = await devProfileModel.create(inputData.developer);
        }

        res.json({ 
            user: { email, password, rol}, 
            company: companyRegistered, 
            developer: developerRegistered 
        });

    } catch( error ) {
        res.json({msg: 'Error al registrar el usuario', errors: error.errors })
    }
}
const patchUsers = async (req , res) => {
        const userId = req.params.id
        const inputData = req.body

    try {
        const data = await userModel.findByIdAndUpdate(userId, inputData, {new: true})

        res.json( data )
    } catch( error ) {
        res.json({msg: 'Error al actualizar el usuario'})
    }
}

const putUsers = async (req, res) => {
        const userId = req.params.id
        const inputData = req.body

    try {
        const data = await userModel.findByIdAndUpdate(userId, inputData, {new: true})
        res.json(data)
    } catch( error ) {
        res.json({msg: "Error al actualizar el usuario"})
    }
}

const deleteUsers = async (req, res) => {
    const userId = req.params.id
    try {
        const data = await userModel.findByIdAndDelete(userId)
        res.json(data)
    } catch( error ) {
        res.json({msg: 'Error al eliminar el usuario'})
    }
}


module.exports = {
    getUserById,
    getUsers,
    postUsers,
    patchUsers,
    putUsers,
    deleteUsers
}