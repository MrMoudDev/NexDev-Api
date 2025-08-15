const mongoose = require("mongoose")

async function dbConection () {
    try {
        await mongoose.connect( 'mongodb+srv://MrMoud:557553Sa@cluster0.tjxcxoo.mongodb.net/NexDev-backend' )
        console.log("Base de datos coenctada exitosamente")
    }
    catch (error) {
        console.error( 'La base de datos no se ha podido conectar' )
    };
}

module.exports = dbConection