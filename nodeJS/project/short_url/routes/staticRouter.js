const express=require("express");
const router =express.Router();
const URL=require('../model/url');

router.get("/", async (req,res)=>{
    const allurls= await URL.find({})
    return res.render("home.ejs",{
        urls:allurls,
    });

});


module.exports=router;