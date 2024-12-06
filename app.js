const express = require('express');
const bodyParser = require('body-parser');
const animalsController = require('./animalsController');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/animals', animalsController);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
