//Configuracion del server, 

const express= require('express'); 
const router= require('../router/routes')


const server= express();

//usando el router luego de importarlo
server.use('/api', router);


module.exports= server;
