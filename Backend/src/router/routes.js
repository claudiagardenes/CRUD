const express = require('express');
const  {loginController,addUserController, getAllUserController, getUserByIdController, deleteUserByIdController, updateUserByIdController}  = require("../controller/controller");
const checkUserTypes = require("../utils/checkUserTypesMiddleware");
const router = express.Router();


router.get (`/`,(__,res)=>{
  res.send('bienvenido a mi pagina')    
})
router.use(express.json())

router.post('/register', checkUserTypes, addUserController );
router.get('/register', getAllUserController);
router.get('/register/:id',getUserByIdController);
router.put('/register/:id',checkUserTypes, updateUserByIdController);
router.delete('/register/:id', deleteUserByIdController);

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