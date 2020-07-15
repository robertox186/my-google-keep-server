
const { Client } = require('pg')

const   prop=require('../controllers/properties');

module.exports.createUser= async (info)=>{
    const client = new Client(prop.con)
    console.log(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    
var h=await  client.query(prop.insertUser,[info.names,info.email,info.password,info.edad,JSON.stringify([])]);
client.end(); 
return h
     

}
module.exports.login= async (info)=>{
    console.log(prop.con)
    const client = new Client(prop.con)
    client.connect()
   
       var h=await client.query(prop.login,[info.correo])
       client.end();
return h;

}
module.exports.update= async (info)=>{
    const client = new Client(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    var h=await  client.query(prop.update,[info.informacion,info.email])
client.end();
   return h
     

}
module.exports.select= async (info)=>{
    const client = new Client(prop.con)
    client.connect()
    console.log("prop "+prop)
    console.log("client "+client);
    

   var h= await  client.query(prop.select,[info.email])
    client.end(); 
return h
}