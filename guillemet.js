const express = require('express');
const app = express();
const PORT = process.env.PORT || 4209;
const logic = require('./logic');

app.get('/roomy', function (req, res) {
    logic.fetchHtml()
        .then(json => res.send(json));
})

app.get('/', function (req, res) {
    res.send('this is guillemet');
})

var server = app.listen(PORT, function () {
    console.log(`guillemet listening on ${PORT}`)
})