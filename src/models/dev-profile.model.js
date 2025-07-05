const mongoose = require( 'mongoose' )

const devProfileSchema = new mongoose.Schema({})

const devProfileModel = mongoose.model( 'devprofile', devProfileSchema );

module.exports = devProfileModel