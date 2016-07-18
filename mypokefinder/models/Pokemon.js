var mongoose = require('mongoose');

var PokemonSchema = new mongoose.Schema({
  name: String,
  location: String

});
module.exports = mongoose.model('Pokemon', PokemonSchema);
