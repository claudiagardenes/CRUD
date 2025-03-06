const express = require('express');
const  {loginController,addUserController, getAllUserController, getUserByIdController, deleteUserByIdController, updateUserByIdController}  = require("../controller/controller");
const checkUserTypes = require("../utils/checkUserTypesMiddleware");
const axios = require('axios')
const router = express.Router();

//peticion para mostrar frases aleatorias de una API


    
    router.get('/citas', async (req, res) => {
        try {
          const response= await axios.get('https://api.breakingbadquotes.xyz/v1/quotes',{});
          res.json(response.data);
          console.log(response)
        } catch (error) {
          res.status(500).json({ error: 'error' });
        }
      });

//agrego el middleware aca porque en app no funciona
router.use(express.json())

router.post('/register', checkUserTypes, addUserController );
router.get('/users', getAllUserController);
router.get('/user/:id',getUserByIdController);
router.put('/editar/:id',checkUserTypes, updateUserByIdController);
router.delete('/borrar/:id', deleteUserByIdController);

router.post('/login', loginController);
	
//  router.get("/promo", async (req, res) => {
//      const cocktail = await fetch(
//        "http://www.thecocktaildb.com/api/json/v1/1/random.php",
//       {}
//    );
//     console.log(cocktail);
//     res.data.drinks[0];
//   });

module.exports = router;