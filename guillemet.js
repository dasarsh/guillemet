const express = require('express');
const app = express();

app.get('/roomy', function (req, res) {
    res.send('this is roomy');
})

app.get('/', function (req, res) {
    res.send('this is guillemet');
})

var server = app.listen(4209, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("guillemet listening at http://%s:%s", host, port)
})