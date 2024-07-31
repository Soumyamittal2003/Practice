const User = require("../model/user")
const {v4 :uuidv4} =require("uuid")
const {setUser}=require("../service/auth")


async function handleUserSignup(req,res){
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.redirect("/");
}


async function handleUserLogin(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({email,password });
    if(!user){
        return res.render("login.ejs",{error:"invaild Username or Password"})
    }
    
    const token =setUser(user); //create token
    res.cookie("uid",token); //create a cookie after successful login whose name is uid and value is token value

    return res.redirect("/");
}

module.exports={
    handleUserSignup,
    handleUserLogin
}