const { getUser } =require("../service/auth")

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid = req.cookies.uid; // it fetch the sessionid from cookies

    if(!userUid) return res.redirect("/login");

    const user =getUser(userUid)
    if(!user) return res.redirect("/login");

    //if all is correct
    req.user =user;
    next();

}


async function checkauth(req,res,next){
    const userUid = req.cookies.uid; // it fetch the sessionid from cookies

    

    const user =getUser(userUid)
    

    //if all is correct
    req.user =user;
    next();

}

module.exports={
    restrictToLoggedinUserOnly,
    checkauth
}