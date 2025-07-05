const mongoose = require( 'mongoose' );

async function dbConnection () {
    
    try {
        await mongoose.connect( 'mongodb://localhost:27017/db-nexdev' );
        console.log( 'Base de datos conectada exitosamente' );
    } 
    catch ( error ) {
        // console.error( error );
        console.error( 'Base de datos no se ha podido conectar' );
    }
}


module.exports = dbConnection;