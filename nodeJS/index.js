// creating express server

const http =require("http");;
const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    return res.send("hello from home page");
});

app.get("/about", (req,res)=>{
    return res.send(`hello ${req.query.name}`);
});

const myServer = http.createServer(app);
myServer.listen(5000,()=> console.log("server started"))


/// 