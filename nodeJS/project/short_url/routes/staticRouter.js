const express=require("express");
const router =express.Router();
const URL=require('../model/url');

router.get("/", async (req,res)=>{
    const allurls= await URL.find({})
    return res.render("home.ejs",{
        urls:allurls,
    });

});


router.get("/Signup", async (req,res)=>{
    return res.render("signup.ejs");

});

router.get("/login", async (req,res)=>{
    return res.render("login.ejs");

});
module.exports=router;