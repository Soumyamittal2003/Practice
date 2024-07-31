const User = require("../models/user");

async function handleGetAllUser(req,res){
    const allDbUsers =await User.find({});
    return res.json(allDbUsers);

}

async function handleGetUserById(req,res){
    const user =await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({error:"user not found"});
        }
        return res.json(user);
}

async function handleUpdateUserById(req,res){
    const user =await User.findByIdAndUpdate(req.params.id,{ firstName:"soumya",lastName:"Mittal"});
        return res.json({status : "Success"});
    
}

async function handleDeleteUserById(req,res){
    const user =await User.findByIdAndDelete(req.params.id);
        return res.json({status : "Success"});
}


async function handleCreateNewUser(req,res){
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


}

module.exports={
    handleGetAllUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}