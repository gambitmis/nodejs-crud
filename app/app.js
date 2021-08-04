const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const port = 3003;

const db = mysql.createConnection({
    host: db,
    user: 'dbadmin',
    password: 'password',
    database: 'soccer'
});

db.createConnection((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database ok');
})

global.db =db;

app.set('port', process.env.port || port );
app.set('views',__dirname,'/views');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(fileUpload());

app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
});