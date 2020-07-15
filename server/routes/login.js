const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var user=require('../helpers/user');
const app = express();
app.post('/', function (req, res) {
    let info=req.body;
    console.log(info)
   user.login(info).then(respt=>{
     let resp=respt.rows;

     if(bcrypt.compareSync(info.password,resp[0].password)){
       res.send({status:200,body:resp[0]});

     }else{
       res.send({status:400,message:"usuario u/o contrasena incorrectos"})
     }

   })
})




module.exports=app;