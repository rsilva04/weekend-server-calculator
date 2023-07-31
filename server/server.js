const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const calculatorRouter = require('./routes/calculator.router');

app.use(express.json());
app.use(express.static('server/public'));

// ROUTES
app.use('/calculator', calculatorRouter);

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
