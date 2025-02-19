//Aca va la logica de cada una de las rutas
const UserModel= require('../models/models');

const addUserService = async (req,res)=>{
    //llamo al body para hacer una peticion POST
    const user= req.body;
    try{
        const newUser= new UserModel(user); //lo voy a instanciar para ver si pasa el contrato
        await newUser.save() //si lo paso, lo guardo en la db
        return{message: "usuario generado con exito", statusCode: 201};
      
    }catch(error){
        console.log(error)
        return{message: "error al generar usuario", statusCode: 400}
    }

};

const getAllUserService= async (req,res)=>{
    const allUser= await UserModel.find();
    return allUser
}

const getUserByIdService= async(req)=>{
    const {id}= req.params;
    const userById= await UserModel.findById(id)
    if(!userById){
        return{statusCode: 404, message: "user not found"}
    }
    return userById;
}

const deleteUserService= async (req)=>{
   const {id}=  req.params;
   try{
   const deleteUser= await UserModel.deleteOne({_id:id})
   if(deleteUser.deleteCount===0)//el producto ya no existe
   {
    return {statusCode: 404, message: "user not found"}
   }
   return deleteUser;
   }catch(error){
     console.log(error)
     return{message: "ocurrio un error"}
   }
}
const updateUserByIdService= async(req,res)=>{
    const {id}= req.params;
    const {nombre, apellido, email, password}= req.body;
    try {
      const userUpdate = await Usuario.findByIdAndUpdate(
        id,
        { nombre, apellido, email, password },
        { new: true }
      );
      if (!userUpdate) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json(userUpdate);
    } catch (error) {
      res.status(400).json({ message: "Error al actualizar usuario", error });
    }
  };

module.exports= {addUserService, getAllUserService, getUserByIdService, deleteUserService, updateUserByIdService};


          
        


