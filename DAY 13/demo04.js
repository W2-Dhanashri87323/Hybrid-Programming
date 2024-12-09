const express = require('express');

const app = express();

app.use((request,response,next)=>{
    response.write("hello");
    next()
})

app.use((request,response,next)=>{
    response.write("heyyy");
    next();
})

app.use((request,response,next)=>{
    response.write("bye");
    response.end();
})

app.listen(9898,()=>{console.log("server listening at port number 9898.........")});