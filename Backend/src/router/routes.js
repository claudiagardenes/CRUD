const express = require('express');
const  {addUserController, getAllUserController, getUserByIdController, deleteUserByIdController, updateUserByIdController}  = require("../controller/controller");
const checkUserTypes = require("../utils/checkUserTypesMiddleware");
const router = express.Router();

router.get (`/`,(__,res)=>{
  res.send('bienvenido a mi pagina')    
})


router.post('/user', checkUserTypes, addUserController );
router.get('/user', getAllUserController);
router.get('/user/:id',getUserByIdController);
router.put('/user/:id', updateUserByIdController);
router.delete('/user/:id', deleteUserByIdController);
	
//  router.get("/promo", async (req, res) => {
//      const cocktail = await fetch(
//        "http://www.thecocktaildb.com/api/json/v1/1/random.php",
//       {}
//    );
//     console.log(cocktail);
//     res.data.drinks[0];
//   });

module.exports = router;