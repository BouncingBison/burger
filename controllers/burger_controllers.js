//import burgers
var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');




router.get('/', function(req, res) {
    res.redirect('/index');
});




//get route -> index
router.get('/index', function(req, res) {
    burger.selectAll(function(burger_name) {
        res.render('/index', { burger_name });
    });
});

//post route -> back to /
router.post('/create', function(req, res) {
    burgers.insertBurger(req.body.burger_name, function(result) {
        console.log(result);
    });
    res.redirect('/index');
});


router.post('/burger/devour/:id', function(req, res) {
    burger.devourBurger(req.params.id, function() {
        res.redirect('/index');

    });
});


// ADD A DELETE 

module.exports = router;