const express = require("express");
const mongoose =require("mongoose");

const app = express();
const PORT =8000;

//connecting mongodb

mongoose.connect("mongodb://127.0.0.1:27017/soumya-database")
.then(()=> console.log("Mongodb connected"))
.catch((err)=> console.log("mongo error",err));


//schema
const userSchema =new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    gender: {
        type: String,
        required: true
    },
}, {timestame:true}) //here timestame is function which automatically save the create &update time in db.

//model
const User =mongoose.model("user",userSchema)

// this is a middleware which adds the form data from frontend to body varible below.
app.use(express.urlencoded({extended:false})); 

//main function post rest api

app.post("/insert/data",async(req,res)=>{
    const body =req.body;
    //checking if all entry are given from frontend
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
       return res.status(400).json({ msg: "all fields are required."});
 }
    
    //creating userid for inserting in mongodb
    const result = await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title,
    
    });
    console.log(result)
    return res.status(201).json({msg : "success"});

    });


// route for display html name and email
app.get("/display", async(req,res)=>{
    const allDbUsers =await User.find({});
    const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

//route for display
app.get("/display/users", async(req,res)=>{
    const allDbUsers =await User.find({});
    return res.json(allDbUsers);
});


//route for display , update & delete
app.route("/display/users/:id")
    .get(async(req,res)=>{
        const user =await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({error:"user not found"});
        }
        return res.json(user);
        
})

    .patch(async(req,res)=>{
        const user =await User.findByIdAndUpdate(req.params.id,{ firstName:"soumya",lastName:"Mittal"});
        return res.json({status : "Success"});
    })

    .delete(async(req,res)=>{
        const user =await User.findByIdAndDelete(req.params.id);
        return res.json({status : "Success"});
    })

//running api
app.listen(PORT,()=> console.log("server started"))