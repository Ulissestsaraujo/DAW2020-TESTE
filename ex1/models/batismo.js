var mongoose = require('mongoose')

var schemaBatismo = new mongoose.Schema({
    _id: String,
    date: String,
    href: Number,
    mae: String,
    pai: String,
    ref: String,
    title:String
});

module.exports = mongoose.model('batismo', schemaBatismo, 'batismos')