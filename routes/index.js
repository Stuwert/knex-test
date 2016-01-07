var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

/* GET home page. */

router.get('/albums/new', function(req, res, next){
  res.render('form');
})
router.post('/albums', function(req, res, next) {
  Albums().insert({
    artist: req.body.artist,
    name: req.body.name,
    stars: req.body.stars,
    genre: req.body.genre,
    explicit: req.body.explicit
  }, 'id').then(function(result){
    res.redirect('/')
  })
});

router.get('/', function(req, res, next){
  Albums().select().then(function(result){
    res.render('index', {result: result});
  })
})

module.exports = router;


function Albums(){
  return knex('albums');
}
