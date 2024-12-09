const helper = require('http');
const mysql = require('mysql2');

var connectionDetails = {
                    host  : 'localhost',
                    user  : 'W2_87323_Dhanashri',
                    password : 'manager',
                    database : 'classwork',
                    port : 3306
};

const server  = helper.createServer((request,response)=>{
    // if(request.url == "/api/student" && request.method == "GET")
    // {
    //   const connection = mysql.createConnection(connectionDetails);
    //   connection.connect();
    //   var querytext = `select * from student`;
      
    //   connection.query(querytext,(error,result)=>{
    //     if(result!=null)
    //     {
    //         let jsonquery = JSON.stringify(result);
    //         response.setHeader("content-type","application/json");
    //         response.write(jsonquery);
    //         connection.end();
    //         response.end();
    //     }
    //     else
    //     {
    //         console.log("something went wrong !");
    //         console.log(error);
    //         response.setHeader("content-type","application/json");
    //         response.write(error);
    //         connection.end();
    //         response.end();
    //     }
    // }) 
 
        if(request.url=="/api/employees" && request.method == POST)
        {
            const connection = mysql.createConnection(connectionDetails);
            connection.connect();
            var querytext = `insert into student(name,address) values("raj","warana")`;
            connection.query(querytext,(error,result)=>{
                if(error==null){
                    let jsondata = JSON.stringify(result);
                    response.setHeader("content-type :" + "application/json");
                    response.write(jsondata);
                    connection.end();
                    response.end();
                }
                else
                {
                    console.log("something went wrong");
                    console.log(error);
                    response.setHeader("content-type:" + "application/json");
                    response.write(error);
                    connection.end();
                    response.end();              
                }

            })
        
       }
       else
       {
        response.write("resource not found");
        response.end();
       }
    })
server.listen(9898, ()=>{console.log("Server started at PORT 9898")})
