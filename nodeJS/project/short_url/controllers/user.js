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
    const sessionid =uuidv4() //it generate the unique id
    setUser(sessionid,user); //dairy to store session id
    res.cookie("uid",sessionid); //create a cookie after successful login whose name is uid and value is sessionid

    return res.redirect("/");
}

module.exports={
    handleUserSignup,
    handleUserLogin
}