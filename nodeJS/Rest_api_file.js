// creating express server
const fs = require("fs") 
const express = require("express");


const users = require('./MOCK_DATA.json'); //importing the datafile

const app = express();
const PORT =8000;


//here the : in url represent dynamic value enter
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user =users.find((user) => user.id === id);
    return res.json(user);
});

app.use(express.urlencoded({extended:false})); // this is a middleware which adds the form data from frontend to body varible below.
app.post("/api/users",(req,res)=>{
    const body = req.body;
    users.push({...body,id: users.length +1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length})
    })
   
})
app.get("/about", (req,res)=>{
    return res.send(`hello ${req.query.name}`);
});

app.listen(PORT,()=> console.log("server started"))


/// 