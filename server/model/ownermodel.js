const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
        //unique: true
    }
})

const Ownerdb = mongoose.model('ownerdb', schema);

module.exports = Ownerdb;