const express = require('express');

const app = express();
const port = process.env.PORT || 5005;

app.use(express.static('server/public'));
app.use(express.json());

app.listen(port, () => {
  console.log('listening on port', port);
});


let history = [];
let operator = '';
let result = 0;

app.get('/result', (req, res) => {
    res.send(result.toString());
    console.log('Here is the response data', result);
});

app.get('/history', (req, res) => {
    res.send(history);
    console.log('Here is the response data', history);
});


app.post('/operator', (req,res) => {
    console.log('get a post request.', req.body);
    let operatorArray = req.body;
 
    operator = operatorArray[0];
    res.sendStatus(201);
    console.log(operator);
});

app.post('/inputs', (req,res) => {
    console.log('get a post request.', req.body);
    let firstNumber = req.body[0];
    let secondNumber = req.body[1];

    console.log(firstNumber);
    console.log(secondNumber);
   
    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else if (operator === '/') {
        result = firstNumber / secondNumber;
    };

   
    let calculator = {
        firstNumber: firstNumber,
        operator: operator,
        secondNumber: secondNumber,
        result: result
    };
   
    history.push(calculator);

    console.log(result);
    res.sendStatus(201);
});