const mongoose = require("mongoose")

async function dbConection () {
    try {
        await mongoose.connect( 'mongodb://localhost:27017/db-nexdev' )
        console.log("Base de datos coenctada exitosamente")
    }
    catch (error) {
        console.error( 'Base de datos no se ha podido coenctar' )
    };
}

module.exports = dbConection