const express = require("express");

const {connectMongoDb}=require("./connection")
const UrlRouter = require("./routes/url")

const app = express();
const PORT =8001;

//connecting mongodb

connectMongoDb("mongodb://127.0.0.1:27017/soumya-database")
.then(()=> console.log("Mongodb connected"))
.catch((err)=> console.log("mongo error",err));

//middleware
app.use(express.urlencoded({extended:false})); 
app.use(express.json());

//Routes
app.use("/url", UrlRouter)



//running api
app.listen(PORT,()=> console.log(`server started at Port${PORT}`))