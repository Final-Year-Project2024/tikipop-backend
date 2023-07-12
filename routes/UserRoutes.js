const UserRoutes = require("express").Router();
const UserController = require("../controllers/UserController");

UserRoutes.post("/register", UserController.createUser);
UserRoutes.post("/createpost",UserController.createPost);
UserRoutes.post("/comment",UserController.makeComment);
UserRoutes.post("/like",UserController.likepost);

module.exports= UserRoutes;