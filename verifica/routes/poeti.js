var express = require('express');
var router = express.Router();
const poeti_file = require('../people.json');
var createError = require('http-errors')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render("poeti", {poeti: poeti_file.people});
    //res.render('index', { title: 'Express' });
});


router.get('/poeta/:email', function(req, res, next) {
    //console.log(req.params.email);
    let poeta_trovato = poeti_file.people.find(poet => poet.email == req.params.email);
    console.log(poeta_trovato);
    res.render("poeta", {poeta: poeta_trovato});
    //res.render('index', { title: 'Express' });

    if (typeof poeta_trovato === "undefined") {
        return next(createError(422, 'OPS! Non abbiamo trovato uno scrittore con quel nome :('));
    } else {
        let quotes = [];
        i = 0;
    }
});

module.exports = router;