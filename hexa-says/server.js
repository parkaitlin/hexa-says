const express = require('express');
const app = express();

const methodOverride = require('method-override');
const playerRouter = require('./routes/playerR');

require('dotenv').config();
require('./db/db')
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use("/", playerRouter);

app.listen(process.env.PORT, err=>{
    console.log(err || `listening on ${process.env.PORT}`)
})