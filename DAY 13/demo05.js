const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json()); // express.json it is a function which is used as middleware between server and express, which converts the body's stream data into json object .

var connectionDetails = {
    host  : 'localhost',
    user  : 'W2_87323_Dhanashri',
    password : 'manager',
    database : 'classwork',
    port : 3306
};

app.use((request,response,next)=>{
    response.setHeader("Access-Control-Allow-Origin", "*"); // it is used to give the access to the 9898 server or postmen's server for fetching the data from the db server , it is the error of CORS(cross origin resource sharing).
    next();
})

app.get("/student",(request,response)=>{
    const connection = mysql.createConnection(connectionDetails);
    connection.connect();
    let queryText = `select * from student`;

    connection.query(queryText,(error,result)=>
        {
        response.setHeader("content-type","application/json");
        if(error==null){
            let jsondata = JSON.stringify(result);
            response.write(jsondata);//body
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


app.listen(9898,()=>{
    console.log("server listening at port number 9898.....");
})