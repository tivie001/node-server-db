const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GolfSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: String,
    qty: Number,
    manufacture: [{
        type: Schema.Types.ObjectId,
        ref: "Manufacture"
    }]
})

module.exports = mongoose.model('Golf', GolfSchema);

