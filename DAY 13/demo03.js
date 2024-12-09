const express = require('express');
console.log(express);

const app = express();

app.get("/student",(request,response)=>{
    response.write("GET request received for /student");
    response.end();
});

app.post("/student" ,(request,response)=>{
    response.write("POST request received for /student");
    response.end();
});

app.put("/student" ,(request,response)=>{
    response.write("PUT request received for /student");
    response.end();
});

app.delete("/student" ,(request,response)=>{
    response.write("DELETE request received for /student");
    response.end();
});

app.listen(9898,()=>{console.log("Server started at PORT No 9898")})
