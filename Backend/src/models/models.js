// Modelo de Usuario( contrato con los parametros que debe tener el usuario, para ser instanciado)
const {mongoose, Schema}= require ('mongoose');


const newUser= Schema ({
    nombre
    : {
      type: String,
      required: true
      
    },
    apellido
    : {
      type: String,
      required:true
      
    },
    email: {
      type: String,
      required: true
    },
    password:{
      type: String,
    required: true
    },
    isNewUser: {
      type: Boolean,
      default: false
    }
  });

  const Usuario= mongoose.model("Usuario", newUser);

  module.exports= Usuario;