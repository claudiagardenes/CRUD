//aca van los middlewares
//Creacion de middlewares para que si o si tenga que completar el modelo
//el md va a ir en routes, entre la ruta y el controlador


const checkUserTypes= (req,res,next) =>{
    const user= req.body;
    const arrayOfValidations = []

    if(typeof user.nombre !== "string") {arrayOfValidations.push("nombre debe ser un string")}
    if(typeof user.apellido !== "string") {arrayOfValidations.push("apellido debe ser un string")}
    if(typeof user.email !== "string") {arrayOfValidations.push("email debe ser un string")}
    if(typeof user.password !== "string") {arrayOfValidations.push("password debe ser un string")}
    
   
    if(arrayOfValidations.length >0) return res.json({statusCode: 400, message: "revisa el objeto,", arrayOfValidations })
    
    next()
}
module.exports = checkUserTypes;


  
