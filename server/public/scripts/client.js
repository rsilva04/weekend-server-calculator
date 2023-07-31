let clientCalculator = '';

function addition() {
    clientCalculator = '';
    clientCalculator = '+';
    console.log('in addition function');
    console.log(clientCalculator);
    // Post route sends clientOperator to server
    axios.post('/operator' , [clientCalculator]).then((response) => {
        console.log(response);
     }).catch((error) => {
         console.log(error);
         alert('Something went wrong');
     });
}
function subtraction() {
    clientCalculator = '';
    clientCalculator = '-';
    console.log('in subtraction function');
    console.log(clientCalculator);
    // Post route sends clientOperator to server
    axios.post('/operator' ,[clientCalculator]).then((response) => {
        console.log(response);
     }).catch((error) => {
         console.log(error);
         alert('Something went wrong');
     });
}
function multiplcation() {
    clientCalculator = '';
    clientCalculator = '*';
    console.log('in multiplication function');
    console.log(clientCalculator);
    
    axios.post('/operator' , [clientCalculator]).then((response) => {
        console.log(response);
     }).catch((error) => {
         console.log(error);
         alert('Something went wrong');
     });
}

function division() {
    clientCalculator = '';
    clientCalculator = '/';
    console.log('in division function');
    console.log(clientCalculator);
    
    axios.post('/operator' , [clientCalculator]).then((response) => {
        console.log(response);
     }).catch((error) => {
         console.log(error);
         alert('Something went wrong');
     });
}


function answer() {
    let firstNumber = Number(document.querySelector('#firstNumber').value);
    let secondNumber = Number(document.querySelector('#secondNumber').value);
    let calulatedInput = [firstNumber, secondNumber];
    if (clientCalculator === '') {
        alert('Not Working.')
        return (null);
    }
    axios.post('/inputs' , calulatedInput).then((response) => {
        console.log(response);
      
        getResult();
        getHistory();
        clientCalculator = '';

     }).catch((error) => {
         console.log(error);
         alert('Something went wrong');
     });
}

function getResult() {
    axios.get('/result').then((response) => {
        let result = response.data;
        let resultDiv = document.querySelector('#result');
        resultDiv.innerText = result;
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
     });
}

function getHistory() {
    axios.get('/history').then((response) => {
        let history = response.data;
        let historyDiv = document.querySelector('#history');
        historyDiv.innerHTML = '';
        for (let entry of history) {
            historyDiv.innerHTML += 
            `<ul><li>${entry.firstNumber} ${entry.operator} ${entry.secondNumber} = ${entry.result}</li></ul>`
            }
        }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
     });
}

function clearCalculator() {
    document.querySelector('#firstNumber').value = '';
    document.querySelector('#secondNumber').value = '';
    let resultDiv = document.querySelector('#result');
    resultDiv.innerText = 0;
}
