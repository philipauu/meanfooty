var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27500/footy';
mongoose.connect(url,{useMongoClient: true});

var schema = {
    name: String,
    age: String,
    gender: String,
    foot: String,
    nationality: String
}

var doc_structure = new mongoose.Schema(schema);

var PLAYERCLASS = mongoose.model('players', doc_structure);

module.exports = PLAYERCLASS;