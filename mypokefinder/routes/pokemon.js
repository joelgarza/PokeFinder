var express = require('express');
var router = express.Router();

var Pokemon = require('../models/Pokemon.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Pokemon.find(function(err, docs){
    res.render('pokemons/index', { pokemons:  docs });
  });
});

router.post('/', function(req, res, next) {
  var pokemon = new Pokemon({
    name: req.body.name,
    location: req.body.location
  });
  pokemon.save(function(err){
    if (err) res.send('error ' + err);
    else res.redirect('/pokemon');
  })
});
module.exports = router;
