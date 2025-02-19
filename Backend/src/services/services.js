//Aca va la logica de cada una de las rutas
const UserModel= require('../models/models');
const bcrypt= require('bcrypt'); 


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
    const updateUser= req.body;
    
    try {
      const userById = await UserModel.findByIdAndUpdate(id);
      if (!userById)return{ statusCode: 404, message: "Usuario no encontrado" };
      
      userById.nombre= updateUser.nombre;
      userById.apellido= updateUser.apellido;
      userById.email= updateUser.email;
      userById.password= updateUser.password;
      
      userById.isNewUser= updateUser.hasOwnProperty("isNewUser")
        ? updateUser.isNewUser
        : userById.isNewUser
      await userById.save()
      return{message: "ocurrio un error", statusCode: 201}
    
    } catch (error) {
      return{message: "ocurrio un error", statusCode:400}
    }
  };

  const loginService= async(req,res)=>{
       //llamo al body para hacer una peticion POST
       const {email,password}= req.body;
       try{
           const userFound=  await UserModel.findOne({email});
           if (!userFound) return res.status(400).json({message: "user not found"});

           const isMatch= await bcrypt.compare(password, userFound.password);
           if(!isMatch) return res.status(400).json({message: "incorrect password"});

           const token= await createAccessToken({id: userFound._id});

           res.cookie("token", token);

           }
        catch(error){
           res.status(500).json({message: error.message})
       }
  }


module.exports= {addUserService, getAllUserService, getUserByIdService, deleteUserService, updateUserByIdService};


          
        


