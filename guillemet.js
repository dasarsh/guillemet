const express = require('express');
const app = express();
const PORT = process.env.PORT || 4209;

app.get('/roomy', function (req, res) {
    res.send('this is roomy');
})

app.get('/', function (req, res) {
    res.send('this is guillemet');
})

var server = app.listen(PORT, function () {
    console.log(`guillemet listening on ${ PORT }`)
})