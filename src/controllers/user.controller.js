const companyModel = require("../models/company.model.js")
const devProfileModel = require("../models/devProfile.model.js")
const userModel = require("../models/user.model.js")

const getUsers = async (req , res) => {
    try {
        const data = await userModel.find().populate([ 'company', 'devProfile' ]).select("-password")
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
    const inputData = req.body;                     // 5
    const { email, password, rol } = inputData;     // Desestructuracion

    let companyRegistered;
    let developerRegistered;

    try {

        let userData = { email, password, rol };

        // Paso 1: Verificar si el usuario existe
        const userExists = await userModel.findOne({ email: inputData.email });
        // Verificando si el usuario existe
        if ( userExists ) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Paso 2: Filtro los datos a registrar por rol
        if( inputData.rol === 'company' ) {
            companyRegistered = await companyModel.create( inputData.company );
            userData.company = companyRegistered._id;
        }
        else if( inputData.rol === 'developer' ) {
            developerRegistered = await devProfileModel.create(inputData.developer);
            userData.devProfile = developerRegistered._id;
        }

        const userRegistered = await userModel.create( userData );

        res.json({
            user: userRegistered,
            company: companyRegistered,
            developer: developerRegistered
        });

    } catch( error ) {
        res.json({msg: 'Error al registrar el usuario', errors: error.errors })
    }
}
const patchUsers = async (req , res) => {
    const inputData = req.body;                     // 5
    const { email, password, rol } = inputData;     // Desestructuracion

    let companyRegistered;
    let developerRegistered;

    try {

        let userData = { email, password, rol };

        // Paso 1: Verificar si el usuario existe
        const userExists = await userModel.findOne({ email: inputData.email });
        // Verificando si el usuario existe
        if ( ! userExists ) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Paso 2: Filtro los datos a registrar por rol
        if( inputData.rol === 'company' ) {
            companyRegistered = await companyModel.findByIdAndUpdate( userExists._id, inputData.company, { new: true } );
            userData.company = companyRegistered._id;
        }
        else if( inputData.rol === 'developer' ) {
            developerRegistered = await devProfileModel.create( userExists._id, inputData.developer, { new: true } );
            userData.devProfile = developerRegistered._id;
        }

        const userRegistered = await userModel.findByIdAndUpdate( userExists._id, userData, { new: true } );

        res.json({ 
            user: userRegistered,
            company: companyRegistered,
            developer: developerRegistered
        });

    } catch( error ) {
        res.json({msg: 'Error al registrar el usuario', errors: error.errors })
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
const getUsersByRol= async (req, res)=>{
    const rol = req.params.rol
    try {
        const data = await userModel.find({ rol }).select('-password')
        res.json(data)
    } catch (error) {
        res.json({msg: 'Error al obtener el usuario por Rol'})
    }
}

module.exports = {
    getUserById,
    getUsers,
    postUsers,
    patchUsers,
    putUsers,
    deleteUsers,
    getUsersByRol
}