const mongoose = require("mongoose")

async function dbConection () {
    try {
        await mongoose.connect( process.env.DB_URI)
        console.log("Base de datos coenctada exitosamente")
    }
    catch (error) {
        console.error( 'Base de datos no se ha podido coenctar' )
    };
}

module.exports = dbConection