import express from "express"

import { create,Authetification,getAllUsers,getUserById,update,deleteUser,createDefault } from "../controller/userController.js"
const route = express.Router();
route.post("/contact",create)
route.post("/user/default",createDefault)
route.post("/login",Authetification)
route.get("/users",getAllUsers)
route.get("/user/:id",getUserById)
route.put("/update/user/:id",update)
route.delete("/delete/user/:id",deleteUser)
export default route;