//import

const express = require("express");
const path = require("path");
const {connectMongoDb}=require("./connection")
const cookieParser =require("cookie-parser")
const { restrictToLoggedinUserOnly, checkauth } =require("./middleware/auth")

//routes
const UrlRouter = require("./routes/url")
const StaticRoutes = require("./routes/staticRouter")
const userRoute = require("./routes/user")

const app = express();
const PORT =8001;

//connecting mongodb

connectMongoDb("mongodb://127.0.0.1:27017/soumya-database")
.then(()=> console.log("Mongodb connected"))
.catch((err)=> console.log("mongo error",err));

// setting up ejs:
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

//middleware
app.use(express.urlencoded({extended:false})); 
app.use(express.json());
app.use(cookieParser());



//Routes
app.use("/url",restrictToLoggedinUserOnly, UrlRouter)
app.use("/",checkauth,StaticRoutes)
app.use("/user",userRoute)


//running api
app.listen(PORT,()=> console.log(`server started at Port${PORT}`))