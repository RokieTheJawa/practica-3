const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const path = require('path');

const routes = require('./routes')

const app = express()

app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'Rokie2',
    password: 'abc123',
    database: 'library'
}

//middleware
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//rutas
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'\\index.html'))
})

app.get('/index.js', (req, res)=>{
    res.sendFile(path.join(__dirname+'\\index.js'))
})

app.get('/index.css', (req, res)=>{
    res.sendFile(path.join(__dirname+'\\index.css'))
})

app.use('/api', routes)

// servidor corriendo
app.listen(app.get('port'),()=>{
    console.log('El servidor está corriendo en el puerto: ', app.get('port'))
})
