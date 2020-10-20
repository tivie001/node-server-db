const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManufactureSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Golf"
    }]
})

module.exports = mongoose.model('Manufacture', ManufactureSchema);

