const jwt = require ("jsonwebtoken")

const generateToken = (payload) => {

    console.log( payload );

    const token = jwt.sign(
        payload,             // Carga util
        'kskxmejxnskslls',          // Palabra semilla secreta
        {expiresIn: "1h"}    //Opciones y coniguraciones del token
           //Opciones y coniguraciones del token
    )

    return token;
}

const verifyToken = ( token ) => {
    const payload = jwt.verify(
        token,  // token valido
        'kskxmejxnskslls'
    )    // Palabra semilla secreta

    return payload
}

module.exports = {
    generateToken,
    verifyToken
}