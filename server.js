//const http = require('http');

//const hostname = '127.0.0.1';
//const port = 4000;

//const server = http.createServer((req,res)=> {
  //  res.statusCode = 200;
   // res.headersSent = ('Content-type','text/plain');
    //res.end('Hello Word');

//});

//server.listen(port,hostname,()=>{
  //  console.log(`Server running at ${hostname}:${port}` );
//})

const express = require('express');
const app = express();
const port = 4000;
require('dotenv').config();


app.get('/',(req,res)=> {
    res.send('This Is Home Page');
});

app.listen(process.env.port,()=>{
    console.log(`App is Running At ${port}`);
})
