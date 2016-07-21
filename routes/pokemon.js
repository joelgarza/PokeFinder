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
  console.log(req.body);

  var pokemon = new Pokemon({
    name: req.body.name,
    lat: Number(req.body.latitude),
    lng: Number(req.body.longitude)
  });
  pokemon.save(function(err){
    if (err) res.send('error ' + err);
    else res.redirect('/pokemon');
  })
});

router.get('/locations.json', function(req, res, next){
  Pokemon.find(function(err, pokemons){
    if (err) next(err);
    res.send(pokemons.map(function(pokemon){
      return {
        name: pokemon.name,
        lat: pokemon.lat,
        lng: pokemon.lng
      };
    }));
  });
});

module.exports = router;
