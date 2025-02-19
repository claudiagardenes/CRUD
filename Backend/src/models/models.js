// Modelo de Usuario( contrato con los parametros que debe tener el usuario, para ser instanciado)
const {mongoose, Schema}= require ('mongoose');


const UserSchema = Schema ({
    nombre: {
      type: String,
      required: true
    },
    apellido: {
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
    year:{
      type: Number,
      required: true
    },
    isNewUser: {
      type: Boolean,
      default: false
    }
  });

  const UserModel= mongoose.model("User", UserSchema);

  module.exports= UserModel;