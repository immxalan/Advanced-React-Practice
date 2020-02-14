const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const { data } = require('./data');

app.use(bodyParser.json());

app.use(cors());

const footballers = data.map((footballer, index) => ({ ...footballer, id: index }));

app.get('/api/footballers', (req, res) => {
    res.send(footballers);
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
