const express = require('express')
const app = express.Router()
const path=require('path')
app.use('/login',require('./login'));
app.use('/registro',require('./registro'));
app.use('/create',require('./notas'));
app.use('/select',require('./selectNotas'));
app.use('/update',require('./updateNotas'));
module.exports = app;