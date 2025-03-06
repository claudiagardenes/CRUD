//Esta hoja solo se encargara de escuchar el server y de consumir el puerto desde la hoja .env

require ('dotenv').config();
const server= require('./server/server');
require('./database/config');
const morgan= require('morgan');
const express= require('express');
const cors= require('cors');



const PORT= process.env.PORT || 8080;
//Middlewares para la aplicacion
server.use(express.json()); //lo defini de nuevo en routes
server.use(morgan('dev'));
//  server.use(cors({origin:'https://localhost:3000'}))
//CORS
server.use(cors({ origin: 'http://localhost:3000' }));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  next();
});



const logMiddleware = (req, res, next) => {
     //para loguear los request
     console.log(`${req.method} request for '${req.url}'`);
     next();
   };
  
server.use(logMiddleware);

server.listen (PORT, ()=> {
    console.log('servidor corriendo exitosamente')
})