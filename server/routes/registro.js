const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express.Router();
const user=require('../helpers/user');


app.post('/', function (req, res) {

    let info=req.body;
    console.log(info);
    info.password=bcrypt.hashSync(info.password,10);
    user.createUser(info).then(resp=>{
     let respt=resp.rows;

     res.send({status:200,body:respt});
      



    }).catch(err=>{
console.log("error "+err)
      res.send({status:400,body:err});
    })


});


 



module.exports=app;