var express = require('express');
var router = express.Router();
var faker = require('faker');
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/generate', function (req, res, next) {
    let vettore = { people: [] };
    for (let index = 0; index < 10; index++) {
        vettore.people.push(createFakePerson());
    }

    let data = JSON.stringify(vettore);
    fs.writeFileSync('people.json', data);

    res.send("utenti inseriti");
});

function createFakePerson() {
    let randomName = faker.name.findName(); // Rowan Nikolaus
    let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    let randomCard = faker.helpers.createCard(); // random contact card containing many properties

    let person = {
        name: randomName,
        email: randomEmail,
        card: randomCard
    }
    return person;
}

module.exports = router;
