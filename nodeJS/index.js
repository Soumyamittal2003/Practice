const express = require("express");

const {connectMongoDb}=require("./connection")
const userRouter = require("./routes/user")

const app = express();
const PORT =8000;

//connecting mongodb

connectMongoDb("mongodb://127.0.0.1:27017/soumya-database")
.then(()=> console.log("Mongodb connected"))
.catch((err)=> console.log("mongo error",err));


//middleware -plugin
app.use(express.urlencoded({extended:false}));


//Routes
app.use("/users", userRouter)

//running api
app.listen(PORT,()=> console.log("server started"))