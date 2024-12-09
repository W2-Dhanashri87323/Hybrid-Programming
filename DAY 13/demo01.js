//step.1 : Import Mysql Package
const mysql = require('mysql2'); 
console.log(mysql);

var connectionDetails = {
        host : 'localhost',
        user : 'W2_87323_Dhanashri',
        password : 'manager',
        database :  'classwork',
        port : 3306
    };

const connection = mysql.createConnection(connectionDetails);
connection.connect();

//------------- select * query ---------
// var queryText = `select * from student`;

// connection.query(queryText, (error,result) =>{
//     if(err==null)
//     {
//         var dataInJson = JSON.stringify(result);
//         console.log(dataInJson);
//     }
//     else
//     {
//         console.log("something went wrong !");
//         console.log("Technical details are :");
//         console.log(error);
//     }

// })

// connection.end();

//------------- Insert query ---------

// var queryforInsert = `insert into student(name,address) values("sakshi" , "Indore") `;
// connection.query(queryforInsert,(err,res)=>{
//     if(err==null){
//         let jsondata = JSON.stringify(res);
//         console.log(jsondata);
//     }
//     else{
//       console.log("Something went wrong")
//       console.log(err);  
//     }
// })

//------------- update query ---------
// let queryforupdate = `update student set name = "shubham", address = "satara" where id = 3 `;
// connection.query(queryforupdate,(err,res)=>{
//     if(res != null)
//         {
//             let jsondata = JSON.stringify(res);
//             console.log(jsondata);
//         }
//         else
//         {
//             console.log("Something went wrong")
//             console.log(err);  
//         }

// })

//------------- delete query ---------
let queryfordelete = `delete from student where id = 2 `;
connection.query(queryfordelete,(err,res)=>{
        if(res != null)
            {
                let jsondata = JSON.stringify(res);
                console.log(jsondata);
            }
            else
            {
                console.log("Something went wrong")
                console.log(err);  
            }
    
    })



