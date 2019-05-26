const express = require('express');
const app = express();

const methodOverride = require('method-override');

require('dotenv').config();
require('./db/db')
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.get("/", async(req, res)=>{
    res.render('hexa-says')
})

app.listen(process.env.PORT, err=>{
    console.log(err || `listening on ${process.env.PORT}`)
})