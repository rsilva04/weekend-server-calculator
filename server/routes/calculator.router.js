const express = require('express');
const router = express.Router();
let calculatorEqual = 0

//get request
router.get('/', (req, res) => {
    console.log('GET request made');
    res.send(calculatorEqual);
});

//post request
router.post('/add', (req, res) => {
    console.log('POST request made');
    console.log(req.body);
    let calculatorToAdd = req.body
    calculatorEqual.push(calculatorToAdd)
    res.sendStatus(201)
});

module.exports = router;