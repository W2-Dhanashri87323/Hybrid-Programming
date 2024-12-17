const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());

var connectionDetails = {
                host : "localhost",
                user : "W2_87323_Dhanashri",
                password : "manager",
                port : 3306,
                database : "classwork"
            };

app.use(cors());

app.get("/student",(request,response) =>{
    
    const connection = mysql.createConnection(connectionDetails);
    connection.connect();
    let queryText = `select * from student`;

    connection.query(queryText,(error,result)=>
        {
        response.setHeader("content-type","application/json");
        if(error==null)
        {
            let jsonData = JSON.stringify(result)
            response.write(jsonData);
            response.end();
        }
        else 
        {
            console.log(error);
            response.write(error);
            response.end();
        }
        connection.end();

    }) 
});

app.get("/student/:id" ,(request,response)=>{ 
    let no = request.params.id;

    const connection = mysql.createConnection(connectionDetails);
    connection.connect();
    let queryText = `select * from student where id = ${no}`;
     
    connection.query(queryText,(err,response)=>
        {
            response.setHeader("content-type", "application/json");
            if(err == null)
            {
                let dataInJSON = JSON.stringify(result); 
                response.write(dataInJSON)
                response.end();
            }
            else
            {
                console.log(err);
                response.write(err);
                response.end();
            }
        connection.end();
    })
});

app.post("/student",(req,resp)=>{

    console.log("Data Received from request body is : ");
    console.log(req.body); // req.body is a body in which inputed data from server in comming in stream format(Chunks).

    const connection = mysql.createConnection(connectionDetails);
    connection.connect();

    let queryText = `insert into student(name,address) values('${req.body.name}','${req.body.address}') `;
    connection.query(queryText,(error,result)=>{

       resp.setHeader("content-type", "application/json");
            if(error == null)
            {
                let dataInJSON = JSON.stringify(result); 
                response.write(dataInJSON)
                response.end();
            }
            else
            {
                console.log(error);
                response.write(error);
                response.end();
            }
        connection.end();
    })
});

app.put("/student/:no",(request,response)=>{
    var id = request.params.id; // id from header
    var name = request.body.name;// name from body
    var address = request.body.address;// address from body 

    const connection = mysql.createConnection(connectionDetails);
    connection.connect();

    let queryText = `update student set name = '${name}', address = '${address} where id='${id}'`;

    connection.query(queryText,(error,result)=>{
        resp.setHeader("content-type", "application/json");
            if(error == null)
            {
                let dataInJSON = JSON.stringify(result); 
                response.write(dataInJSON)
                response.end();
            }
            else
            {
                console.log(error);
                response.write(error);
                response.end();
            }
        connection.end();
    })
});


app.delete("/student/:no",(request,response)=>{
    var id = request.params.id; // id from header
    var name = request.body.name;// name from body
    var address = request.body.address;// address from body 

    const connection = mysql.createConnection(connectionDetails);
    connection.connect();

    let queryText = `delete from student where id='${id}'`;

    connection.query(queryText,(error,result)=>{
        resp.setHeader("content-type", "application/json");
            if(error == null)
            {
                let dataInJSON = JSON.stringify(result); 
                response.write(dataInJSON)
                response.end();
            }
            else
            {
                console.log(error);
                response.write(error);
                response.end();
            }
        connection.end();
    })
});

//const httpport = config.get("httpport");

app.listen(9898,()=>{console.log(`server listening at port number 9898 .....` ) })








