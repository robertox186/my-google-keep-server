const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();


app.post('/', function (req, res) {
    let body=req.body;
console.log("cuerpo"+body)

 
})


    








module.exports=app;