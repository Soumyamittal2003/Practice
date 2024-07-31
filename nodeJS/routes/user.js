const express = require("express");
const { handleGetAllUser,handleGetUserById, handleUpdateUserById,handleDeleteUserById,handleCreateNewUser } = require("../controllers/user");
const router =express.Router();




//route for display all user
router.route("/")
.get(handleGetAllUser);

//route for creating new user
router.post("/insert/data",handleCreateNewUser);

//route for display , update & delete
router.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)


module.exports=router;