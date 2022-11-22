var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/', function(req, res) {
    res.send('<!DOCTYPE html>\
    <html lang="en">\
    <head>\
        <meta charset="UTF-8">\
        <meta http-equiv="X-UA-Compatible" content="IE=edge">\
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
        <title>Document</title>\
    </head>\
    <body>\
        <h1>Hola mundo</h1>\
    </body>\
    </html>');
});

app.get('/api', function(req, res) {
    res.json({firstname: 'Luis', lastname: 'Chávez Hita'});
});

app.listen(port);