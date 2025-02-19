//aca van los middlewares
//Creacion de middlewares para que si o si tenga que completar el modelo
//el md va a ir en routes, entre la ruta y el controlador


const checkUserTypes= (req,res,next) =>{
    const user= req.body;
    const arrayOfValidations = []
    if(typeof user.nombre !== "string") arrayOfValidations.push("nombre debe ser un string")
    if(typeof user.apellido !== "string") arrayOfValidations.push("apellido debe ser un string")
    if(typeof user.email !== "string") arrayOfValidations.push("email debe ser un string")
    if(typeof user.password !== "string") arrayOfValidations.push("password debe ser un string")
    if(typeof user.year !== "number") arrayOfValidations.push("year debe ser un number")
    if(typeof user.isNewUser !== "boolean") arrayOfValidations.push("isNewUser debe ser un boolean")
    if(arrayOfValidations.length >0) return res.json({statusCode: 400, message: "revisa el objeto,", arrayOfValidations })
    next()
}
module.exports = checkUserTypes;

// // Ruta para obtener todos los usuarios
// app.get("/Contactanos", async (req, res) => {
//     try {
//       const usuarios = await Usuario.find();
//       res.json(usuarios);
//     } catch (error) {
//       res.status(500).json({ message: "Error al obtener usuarios", error });
//     }
//   });
  
//   // Ruta para crear un usuario
//   app.post("/Contactanos", async (req, res) => {
//     const { nombre, apellido, email, password } = req.body;
//     const usuario = new Usuario({ nombre, apellido, email, password });
//     try {
//       await usuario.save();
//       res.status(201).json(usuario);
//     } catch (error) {
//       res.status(400).json({ message: "Error al crear usuario", error });
//     }
//   });
  
//   // Ruta para actualizar un usuario
//   app.put("/Contactanos/:id", async (req, res) => {
//     const { id } = req.params;
//     const { nombre, apellido, email, password } = req.body;
//     try {
//       const usuario = await Usuario.findByIdAndUpdate(
//         id,
//         { nombre, apellido, email, password },
//         { new: true }
//       );
//       if (!usuario) {
//         return res.status(404).json({ message: "Usuario no encontrado" });
//       }
//       res.json(usuario);
//     } catch (error) {
//       res.status(400).json({ message: "Error al actualizar usuario", error });
//     }
//   });
  
//   // Ruta para eliminar un usuario
//   app.delete("/Contactanos/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//       console.log("trying to delete user");
//       console.log("id", id);
//       console.log("---------");
//       console.log("---------");
//       const usuario = await Usuario.findByIdAndDelete(id);
//       if (!usuario) {
//         return res.status(404).json({ message: "Usuario no encontrado" });
//       }
//       res.json({ message: "Usuario eliminado" });
//     } catch (error) {
//       console.log(error);
//       res.status(400).json({ message: "Error al eliminar usuario", error });
//     }
//   });
  
//   app.get("/promo", async (req, res) => {
//     const cocktail = await fetch(
//       "http://www.thecocktaildb.com/api/json/v1/1/random.php",
//       {}
//     );
//     console.log(cocktail);
//     //response.data.drinks[0];
//   });