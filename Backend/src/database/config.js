const mongoose= require('mongoose');
require ('dotenv').config();

const DATABASE= process.env.DATA_BASE_URL;

const connect= async ()=>{
    try{
        await mongoose.connect(DATABASE);
        console.log('base de datos conectada')
    }catch (error){
        console.log(error)
    }
}
connect();
module.exports= mongoose;
