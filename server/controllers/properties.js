module.exports={

insertUser:"insert into  users (names,email,password,edad,informacion) values($1,$2,$3,$4,$5) returning *",
login:"select * from users where email=$1",
update:"update users  set informacion=$1 where email=$2",
con:"pg://lkocwgtekkukbz:8a7553b99bc9669d663622acbe48af39eaa209e8d88f88ccb4c4374967e77d80@ec2-35-153-12-59.compute-1.amazonaws.com:5432/dc0agj70oacge",
select:"select (informacion) from users where email=$1"

}