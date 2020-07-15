const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

var user=require('../helpers/user')

app.post('/', function (req, resp) {
    let body=req.body;
console.log(body)
user.update(body).then(res=>{
 
 resp.send({status:200})



}).catch(err=>{
console.log("error update "+err)
    resp.send({status:400,error:err});
})


});


module.exports=app;