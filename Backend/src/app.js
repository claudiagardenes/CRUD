//Esta hoja solo se encargara de escuchar el server y de consumir el puerto desde la hoja .env

require ('dotenv').config();
const server= require('./server/server');
require('./database/config');
const morgan= require('morgan');
const express= require('express');
const cors= require('cors');



const PORT= process.env.PORT || 8080;
//Middlewares para la aplicacion
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());


const logMiddleware = (req, res, next) => {
     //para loguear los request
     console.log(`${req.method} request for '${req.url}'`);
     next();
   };
  
server.use(logMiddleware);

server.listen (PORT, ()=> {
    console.log('servidor corriendo exitosamente')
})