var express = require('express');
const mysql = require('mysql')
const myconn = require('express-myconnection')
var app = express();
const dbOptions = {
    host: '127.0.0.1',
    port: 3306,
    user: 'Rokie2',
    password: 'abc123',
    database: 'library'
}
const path = require('path')
var port = process.env.port || 3000;

app.get('/', function(req, res) {
    // res.send('<!DOCTYPE html>\
    // <html lang="en">\
    // <head>\
    //     <meta charset="UTF-8">\
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">\
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    //     <title>Document</title>\
    // </head>\
    // <body>\
    //     <h1>Hola mundo</h1>\
    // </body>\
    // </html>');
    res.sendFile(path.join(__dirname)+'\\template.html')
});

app.get('/api', function(req, res) {
    res.json({firstname: 'Luis', lastname: 'Chávez Hita'});
});

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())


//Read
app.get('/get', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM books', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

app.listen(port);