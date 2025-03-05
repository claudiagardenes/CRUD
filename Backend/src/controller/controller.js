//aca se ejecuta la logica de services y se transforma en json para que la lea el front
const {addUserService, getAllUserService, getUserByIdService, deleteUserService, updateUserByIdService, loginService}= require('../services/services')
const jwt= require('jsonwebtoken');

const addUserController= async(req, res)=>{
    const addUser= await addUserService(req);
    res.json(addUser)

}
const getAllUserController =async (req,res)=>{
   const allUsers= await getAllUserService(req);
   res.json(allUsers)
}

const getUserByIdController= async(req,res)=>{
    const userById= await getUserByIdService(req);
    res.json(userById)
}

const deleteUserByIdController= async(req,res)=>{
    const deleteUser= await deleteUserService(req)
    res.json(deleteUser)
}
const updateUserByIdController= async(req, res)=>{
    const updateUser= await updateUserByIdService(req)
    res.json(updateUser)
}
const loginController = async (req,res)=>{
     const loginUser= await loginService(req)
     res.json(loginUser)
}
module.exports= {addUserController, getAllUserController, getUserByIdController, deleteUserByIdController, updateUserByIdController, loginController}




















